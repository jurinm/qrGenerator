from flask import make_response

from .models import User
from main import dsb as db
from hash.hasher import generate_hash


def add_user(data):
    try:
        data.update({'password': generate_hash(data['password'])})
        user = User(**data)

        db.session.add(user)
        db.session.flush()
        db.session.commit()
    except Exception as ex:
        print(ex)


def get_user(user_data):
    return User.query.filter_by(email=user_data['email']).first()


def verify_user(user_id):
    return User.query.filter_by(id=user_id).first()
