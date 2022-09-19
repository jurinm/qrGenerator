import datetime
from main import dsb as db
from sqlalchemy.ext.declarative import declarative_base
base = declarative_base()

class User(db.Model):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    created_at = db.Column(db.DateTime, default=datetime.datetime.utcnow)
    email = db.Column(db.String(25), unique=True, nullable=False)
    password = db.Column(db.String(100), nullable=False)

    def __repr__(self):
        return '<User %r>' % self.nickname
