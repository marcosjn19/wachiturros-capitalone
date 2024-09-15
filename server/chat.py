from flask import Flask, jsonify, request
from flask_cors import CORS
from openai import OpenAI
import secret
client = OpenAI()
global mensajeChat
mensajeChat = {"chat":"."}

global historial

def genHistorial ( ):
    global historial
    historial = [
        {
            "role" : "system",
            "content" : f"Da un consejo de menos de 30 palabras sobre las finanzas de una persona tomando en cuenta los datos que se te proporcionaran."
        }
    ]


def chat( userHistory ):
    genHistorial() 
    respuesta = getAnswer(userHistory)
    mensajeChat = { "chat": respuesta }
    historial.append({"role": "system", "content" : respuesta })
    return mensajeChat

def getAnswer (msg):
    historial.append({"role": "user", "content" : msg })
    response = client.chat.completions.create(
        model="gpt-4o-mini", 
        messages = historial,
        temperature=1
    )
    processed = response.choices[0].message.content
    return processed[:280]  # Ensure the response does not exceed 250 characters
