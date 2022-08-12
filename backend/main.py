from flask import Flask, render_template
from flask_cors import CORS
from flask_pymongo import PyMongo
import json

app = Flask(__name__)
CORS(app)
app.config["MONGO_URI"] = "mongodb://localhost:27017/myDatabase"
mongo = PyMongo(app)

@app.route("/")
def hello():
    user_list = []
    users = mongo.db.users.find()
    for user in users:
        user_list.append(user)
    return json.dumps({"users":user_list})
    

@app.route("/about")
def about():
    return "This is about page"

app.run(debug=True)