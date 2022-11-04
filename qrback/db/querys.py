from flask import make_response
from psycopg2.errorcodes import UNIQUE_VIOLATION
from psycopg2 import errors
from .models import User
from main import dsb as db
from hash.hasher import generate_hash
from hash.hasher import verify_password


def add_user(data):
    try:
        data.update({'password': generate_hash(data['password'])})
        user = User(**data)

        db.session.add(user)
        db.session.flush()
        db.session.commit()
        print('user added')
        return 201
    except Exception as exx:
        print(exx)
        if 'psycopg2.errors.UniqueViolation' in exx.args[0]:
            return 409


def get_user(user_data):
    user = User.query.filter_by(email=user_data['email']).first()
    if not user or not verify_password(user_data['password'], user.password):
        return False

    return user


def verify_user(user_id):
    return User.query.filter_by(id=user_id).first()
