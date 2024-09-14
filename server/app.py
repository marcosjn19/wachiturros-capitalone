from flask import Flask, jsonify, render_template
from flask_cors import CORS
import secret
import requests

app = Flask( __name__ , static_folder='../dist/static',template_folder = '../dist')
cors = CORS( app, origins = '*' )
@app.route ( "/")
@app.route ( "/<int:id>" )
def index(id = 0):
    return render_template("index.html")

@app.route  ( "/api/users", methods =  [ 'GET'  ] )

def users():
    pruebaget = requests.get(f'http://api.nessieisreal.com/customers?key={secret.API_KEY_LOCAL}')
    return pruebaget.json()

app.run( debug = True, port = 5555 )