#api/__init__.py
"""
Initialize api.
"""

from flask import Flask

app = Flask(__name__)
@app.route("/")
def home():
    return ("Karibu Andela!")
