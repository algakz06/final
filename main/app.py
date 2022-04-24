import os
from dotenv import load_dotenv, find_dotenv
from flask import Flask, render_template, url_for, request, flash, abort, session
from flask_login import LoginManager, login_user, logout_user, login_required, UserMixin
from flask_sqlalchemy import SQLAlchemy
from werkzeug.utils import redirect
from forms import RegistrationForm, LoginForm
from werkzeug.security import generate_password_hash, check_password_hash
import re
from datetime import datetime, timedelta


# load_dotenv(find_dotenv())
# SECRET_KEY = os.environ.get("SECRET_KEY")
# DATABASE_PASSWORD = os.environ.get("DATABASE_PASSWORD")

app = Flask(__name__)
# app.config.from_object(__name__)
# app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///mydb.db'
# app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
# app.config['PERMANENT_SESSION_LIFETIME'] = timedelta(minutes=5)

db = SQLAlchemy(app)

# login_manager = LoginManager()
# login_manager.init_app(app)
#
# login_manager.login_view = 'login'
# login_manager.refresh_view = 're-login into acc'
# login_manager.needs_refresh_message = u"Session timed out, in order to keep your account safe, please, re-login"
# login_manager.needs_refresh_message_category = "info"


# @app.before_request
# def before_request():
#     session.permanent = True
#     app.permanent_session_lifetime = timedelta(minutes=30)
#
#
# @login_manager.user_loader
# def load_user(user_id):
#     return User.query.get(user_id)


# class User(UserMixin, db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     username = db.Column(db.String(60), unique=True)
#     password_hash = db.Column(db.String(150))
#     joined_at = db.Column(db.DateTime(), default=datetime.utcnow, index=True)
#     blocked = db.Column(db.Integer, default=0)
#     is_active = db.Column
#
#     def __init__(self, username, password_hash):
#         self.username = username
#         self.password_hash = password_hash
#
#     def set_password(self, password: object) -> object:
#         self.password_hash = generate_password_hash(password)
#
#     def check_password(self, password):
#         return check_password_hash(self.password_hash, password)
#
#     def __repr__(self):
#         return '<User{}>'.format(self.username)


@app.route('/index_en', methods=["POST", "GET"])
def home_eng():
    if request.method == "POST":
        return render_template('login.html')
    return render_template('index_en.html')


@app.route('/index', methods=["POST", "GET"])
@app.route('/', methods=["POST", "GET"])
def home():
    if request.method == "POST":
        return render_template('login.html')
    return render_template('index.html')


@app.route('/news', methods=["POST", "GET"])
def news():
    title = 'Stock Chart'
    return render_template('news.html', title=title)


@app.route('/login', methods=["POST", "GET"])
def login():
    form = LoginForm()
    if request.method == "POST":
        name = request.form.get('username')
        password = request.form.get('password')
        user = User(username=name, password_hash=password)
        login_user(user)
        session['logged_in'] = True
        return render_template('profile.html')
    return render_template('login.html')


@app.route('/signup', methods=['POST', 'GET'])
def signup():
    form = RegistrationForm()
    name = request.form.get('username')
    password1 = request.form.get('password1')
    password2 = request.form.get('password2')
    if form.validate_on_submit():
        hash_pass = generate_password_hash(form.password1.data)
        newuser = User(username=form.username.data, password_hash=password1)
        db.session.add(newuser)
        db.session.commit()

        return render_template('login.html')

    return render_template('signup.html')


@app.route('/forbidden', methods=['POST', 'GET'])
@login_required
def protected():
    return render_template('forbidden.html')


@app.route('/profile', methods=['POST', 'GET'])
def profile():
    if request.method == "POST":
        return render_template('profile.html')
    return render_template('profile.html')


@app.route('/logout', methods=['POST', 'GET'])
def logout():
    logout_user()
    return render_template('index.html')


@app.route('/')
def index():
    title = 'Stock Chart'
    return render_template('index.html', title=title)


if __name__ == "__main__":
    app.run()
