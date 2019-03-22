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
    return render_template("game.html")

@app.route("/Oo0ooO0o0On")
def on():
    print("LED is ON")
    GPIO.output(led, GPIO.HIGH)
    return render_template("Oo0ooO0o0On.html")

@app.route("/off")
def off():
    print("LED is OFF")
    GPIO.output(led, GPIO.LOW)
    return render_template("off.html")


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=8080)
