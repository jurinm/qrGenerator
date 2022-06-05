from flask_sqlalchemy import SQLAlchemy
from flask_sqlalchemy import

db = SQLAlchemy()


class User(db.Model):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    created_at = db.Column(TIMESTAMP(timezone=True),
                        nullable=False,
                        server_default=text("now()"))
    username = db.Column(db.String(15), unique=True, nullable=False)
    email = db.Column(db.String(25), unique=True, nullable=False)
    password = db.Column(db.String(25), nullable=False)