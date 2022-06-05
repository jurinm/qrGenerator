from datetime import datetime
from flask_cors import CORS

from qr_generator.generator import gen
from flask import Flask, request, jsonify

app = Flask(__name__, static_url_path='/static')
CORS(app)


@app.route('/generate', methods=['GET', 'POST'])
def index():
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
        if request.method == 'POST':
            name = request.json
            print(name)
            return name
        return 'test'
    except Exception as ex:
        error_log = f'{datetime.now()} An error happened - {ex}'
        with open('log.txt', 'a') as f:
            f.writelines(f'\n{error_log}')
        return "Something went wrong", 400


if __name__ == '__main__':
    app.run(debug=True)
