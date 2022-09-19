import os
from datetime import datetime

from flask import Flask, request, jsonify, make_response
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy

from qr_generator.generator import gen

from dotenv import load_dotenv

load_dotenv()
database_url = os.environ.get('DATABASE_URI')
secret_key = os.environ.get('SECRET_KEY')

app = Flask(__name__, static_url_path='/static')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_DATABASE_URI'] = database_url
app.config['SECRET_KEY'] = secret_key
CORS(app)

dsb = SQLAlchemy(app)


@app.route('/generate', methods=['GET', 'POST'])
def generate():
    try:
        if request.method == 'POST':
            data = request.json
            if 'text' in data:
                print(data)
                result_file = gen(data['text'], data['background'], data['foreground'], data['drawer'], data['preset'])
                return jsonify({'qrImage': result_file}), 201
            return jsonify({'qrImage': 'no image'}), 201
        else:
            return 'Something went wrong'
    except Exception as ex:
        error_log = f'{datetime.now()} An error happened - {ex}'
        with open('log.txt', 'a') as f:
            f.writelines(f'\n{error_log}')
        return "Something went wrong", 400


@app.route('/registration', methods=['GET', 'POST'])
def registration():
    try:
        user_data = request.json
        if request.method == 'POST':
            from db.querys import add_user

            db_status = add_user(user_data)
            print(db_status)
            if db_status == 409:
                return jsonify({'status': 409, 'message': 'User already exists'})
            if db_status == 201:
                print('test add user')
                return jsonify({'status': 201, 'message': f'User {user_data["email"]} successfully created'})

    except Exception as ex:
        print(ex)
        error_log = f'{datetime.now()} An error happened - {ex}'
        with open('log.txt', 'a') as f:
            f.writelines(f'\n{error_log}')
        return jsonify({'status': 409, 'errorMessage': 'Something went wrong'})


@app.route('/login', methods=['POST'])
def login():
    if request.method == 'POST':
        auth = request.json

        if not auth or not auth['email'] or not auth['password']:
            return make_response('Wrong email or password', 401, {'WWW-Authenticate': 'Basic realm:"Login required"'})

        from db.querys import get_user
        user = get_user(auth)
        print(f'{user} main py')
        if user:
            from jwt_auth.oath import generate_token
            user_token = generate_token(user, auth)
            print(user_token)
            print(user.nickname)
            print(jsonify({'nickname': user.nickname, 'token': user_token}))
            return jsonify({'status': 200, 'nickname': user.nickname, 'token': user_token})

        return jsonify({'status': 401, 'errorMessage': 'Wrong Email or password'})


@app.route('/check', methods=['POST'])
def token_check():
    if request.method == 'POST':
        token = request.json
        print(token)
        if not token['token']:
            return make_response('Wrong email or password', 401, {'WWW-Authenticate': 'Basic realm:"Login required"'})
        from jwt_auth.oath import verify_token
        print(token)
        verification_result = verify_token(token['token'])
        print(verification_result)
        if verification_result:
            from db.querys import verify_user

            if verify_user(verification_result['id']):
                print(verification_result)
                return make_response('Token ok', 200)

        return make_response('Incorrect or expired token', 401, {'WWW-Authenticate': 'Basic realm:"Login required"'})


if __name__ == '__main__':
    app.run(debug=True)

