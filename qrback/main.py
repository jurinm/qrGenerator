import os
from datetime import datetime

from flask import Flask, request, jsonify
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

            add_user(user_data)
            print(f'User {user_data["nickname"]} successfully created')
            return jsonify(f'User {user_data["nickname"]} successfully created'), 201
    except Exception as ex:
        error_log = f'{datetime.now()} An error happened - {ex}'
        with open('log.txt', 'a') as f:
            f.writelines(f'\n{error_log}')
        return "Something went wrong", 400


if __name__ == '__main__':
    app.run(debug=True)
