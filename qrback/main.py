import flask
from flask_cors import CORS

from qr_generator.generator import gen
from flask import Flask, url_for, send_from_directory, request, jsonify

app = Flask(__name__, static_url_path='/static')
CORS(app)

# TODO: clear old files


@app.route('/generate', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        data = request.json

        print(data)
        result_file = gen(data['text'], data['background'], data['foreground'], data['drawer'], data['preset'])
        return jsonify({'qrImage': result_file}), 201
    else:
        return 'test'


if __name__ == '__main__':
    app.run(debug=True)
