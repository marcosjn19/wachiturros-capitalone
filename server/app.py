from flask import Flask, jsonify, render_template
from flask_cors import CORS
import secret
import requests
import chat
app = Flask( __name__ , static_folder='../dist/static',template_folder = '../dist')
cors = CORS( app, origins = '*' )

@app.route ( "/")
@app.route ( "/<int:id>" )
def index(id = 0):
    return render_template("index.html")
generalData = None
def genUserMessage ():
    global userMessage
    userMessage = "Analiza las finanzas de una persona tomando en cuenta que su cuenta de ahorros tiene $300, su credito es de $100 y tiene una deuda de $500."

@app.route  ( "/api/users", methods =  [ 'GET'  ] )
def users():
    userId = '66e614659683f20dd5189c29'
    global generalData
    generalData = requests.get(f'http://api.nessieisreal.com/customers/{userId}?key={secret.API_KEY_LOCAL}')
    return generalData.json()

@app.route ( "/api/chat", methods = ['GET'] ) 
def getChat ():
    genUserMessage()
    return chat.chat(userMessage)

app.run( debug = True, port = 5555 )