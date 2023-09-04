import requests
from traceback import print_tb
from schedule import Scheduler
import threading
import time
import datetime
from . import models
from . import serializers
from .helpers import email_interaction
import datetime


def has5MinPassed(timestamp):
    # Convert JavaScript timestamp to Python datetime
    js_timestamp = datetime.datetime.fromtimestamp(
        timestamp / 1000.0
    )  # Convert to seconds

    # Calculate the time 5 minutes ago from the current time
    current_time = datetime.datetime.now()
    time_window = datetime.timedelta(minutes=5)
    minutes_ago = current_time - time_window

    # Check if the JavaScript timestamp is earlier than 5 minutes ago
    if js_timestamp <= minutes_ago:
        return True
    else:
        return False


def updateOnEmail(pk):
    inr = models.ProductInteractions.objects.get(pk=pk)
    inr.isEmail = True
    inr.save()


def evaluateInteractions():
    # current_time = datetime.datetime.now()
    # time_window = datetime.timedelta(minutes=5)
    # minutes_ago = current_time - time_window

    # # Convert current time to JavaScript timestamp
    # js_current_time = int(current_time.timestamp() * 1000)  # Convert to milliseconds

    # # Convert 5 minutes ago to JavaScript timestamp
    # js_minutes_ago = int(minutes_ago.timestamp() * 1000)  # Convert to milliseconds

    # print(js_current_time)
    # print(js_minutes_ago)

    recent_interactions = models.ProductInteractions.objects.filter(
        isCancelled=False,
        isEmail=False,
    )

    print("[CRON_JOB] I run after every 4 minutes!")

    for interaction in recent_interactions:
        serializer = serializers.ViewProductInteractionsSerializer(interaction)
        s_data = serializer.data
        if has5MinPassed(s_data["timestamp"]) or not s_data["isWait"]:
            email_interaction(s_data["product"], s_data["user"], s_data["action"])
            updateOnEmail(interaction.pk)


def run_continuously(self, interval=1):
    cease_continuous_run = threading.Event()

    class ScheduleThread(threading.Thread):
        @classmethod
        def run(cls):
            while not cease_continuous_run.is_set():
                self.run_pending()
                time.sleep(interval)

    continuous_thread = ScheduleThread()
    continuous_thread.setDaemon(True)
    continuous_thread.start()
    return cease_continuous_run


Scheduler.run_continuously = run_continuously


def start_scheduler():
    scheduler = Scheduler()
    # scheduler.every(4).minutes.do(evaluateInteractions)  # Run every 5 minute
    # scheduler.every(10).seconds.do(evaluateInteractions)
    # scheduler.every().second.do(evaluateInteractions)
    scheduler.run_continuously()
