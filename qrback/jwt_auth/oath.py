import datetime
import os

import dotenv
from dotenv import load_dotenv
from flask import jsonify, make_response
from hash.hasher import verify_password
from jose import jwt, JWTError
from datetime import datetime, timedelta

load_dotenv()

secret_key = os.environ.get('SECRET_KEY')
algorithm = os.environ.get('ALGORITHM')
token_exp_time = os.environ.get('ACCESS_TOKEN_EXPIRE_MINUTES')


def generate_token(user, auth):
    if not user:
        return jsonify({'error': 'Wrong email or password'})

    if verify_password(auth['password'], user.password):
        token = jwt.encode({'id': user.id,
                            'exp': datetime.utcnow() + timedelta(minutes=int(token_exp_time))},
                           secret_key,
                           algorithm=algorithm)
        return {'token': token}

    return make_response('Wrong email or password', 401, {'WWW-Authenticate': 'Basic realm:"Login required"'})


def verify_token(token):
    try:
        if not token:
            return False

        decoded_token = jwt.decode(token,
                                   secret_key,
                                   algorithms=algorithm)
        if not decoded_token['id']:
            return False
    except JWTError:
        return False

    return decoded_token
