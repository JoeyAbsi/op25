# !/bin/python
# Reboot/Shutting Down A Raspberry Pi Using A Momentary Switch

import RPi.GPIO as GPIO
import time
import os

GPIO.setmode(GPIO.BCM)
GPIO.setup(20, GPIO.IN, pull_up_down=GPIO.PUD_UP)   #Change GPIO PIN If Needed
def Shutdown(channel):
    time.sleep(1)     #Time In Seconds Before Reboot/Shutdown
    os.system("sudo shutdown -h now")   #reboot/shutdown command

GPIO.add_event_detect(20, GPIO.FALLING, callback=Shutdown, bouncetime=2000)   #Change GPIO PIN If Needed

while 1:

    time.sleep(2)
