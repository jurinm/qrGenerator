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
