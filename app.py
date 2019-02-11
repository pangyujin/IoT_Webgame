#! /usr/bin/env python3
from flask import Flask, render_template
import time
import RPi.GPIO as GPIO

led = 4
GPIO.setmode(GPIO.BCM)
GPIO.setup(led, GPIO.OUT)
GPIO.setwarnings(False)

app = Flask(__name__)

@app.route('/')
def index():
    return render_template("main.html")

@app.route("/on")
def on():
    print("Onnnnnnn")
    GPIO.output(led, GPIO.HIGH)
    return render_template("main.html")

@app.route("/off")
def off():
    print("Offffffffffffff")
    GPIO.output(led, GPIO.LOW)
    return render_template("main.html")


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
