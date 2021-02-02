from flask import Flask, jsonify, render_template
from flask_pymongo import PyMongo
from bson.json_util import dumps


app = Flask(__name__)
connect = PyMongo(app, uri = "mongodb://localhost:27017/indego_db")

@app.route("/")
def home():
    indego = connect.db.summary.find()
    data = []

    for doc in list(indego):
        row = {}
        row['index'] = doc['index']
        row['Q2-19'] = doc['Q2-19']
        row['Q2-20'] = doc['Q2-20']
        row['Q3-20'] = doc['Q3-20']
        row['Q3-19'] = doc['Q3-19']
        data.append(row)
    # return dumps(list(indego))
    #return jsonify(data)
    #print(data)
    return render_template("index.html", data = data) 





if __name__ == "__main__":
    app.run(debug=True)