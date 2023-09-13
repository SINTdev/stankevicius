import requests
from traceback import print_tb
from schedule import Scheduler
import threading
import time
import datetime
from . import models
from . import serializers
from .helpers import email_interaction
from datetime import datetime, timedelta
from django.utils import timezone


def has5MinPassed(timestamp):
    # Convert JavaScript timestamp to Python datetime
    js_timestamp = datetime.fromtimestamp(timestamp / 1000.0)  # Convert to seconds

    # Calculate the time 5 minutes ago from the current time
    current_time = datetime.now()
    time_window = timedelta(minutes=5)
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


def expiredProduct(pk):
    inr = models.Product.objects.get(pk=pk)
    inr.isExpired = True
    inr.save()


def is_product_expired(activation_timestamp, expiration_days):
    activation_date = datetime.fromisoformat(activation_timestamp)
    expiration_date = activation_date + timedelta(days=int(expiration_days.split()[0]))
    current_date = datetime.now()
    return current_date >= expiration_date


# Utility functions above


def evaluateInteractions():
    recent_interactions = models.ProductInteractions.objects.filter(
        isCancelled=False,
        isEmail=False,
    )
    for interaction in recent_interactions:
        serializer = serializers.ViewProductInteractionsSerializer(interaction)
        s_data = serializer.data
        if has5MinPassed(s_data["timestamp"]) or not s_data["isWait"]:
            email_interaction(s_data["product"], s_data["user"], s_data["action"])
            print("[CRON_JOB]:", "PRODUCT LOCKED")
            updateOnEmail(interaction.pk)


def evaluateExpired():
    unexpired_products = models.Product.objects.filter(isExpired=False).order_by(
        "-timestamp"
    )
    final_data = serializers.ViewProductSerializer(unexpired_products, many=True).data
    for data in final_data:
        if is_product_expired(data["timestamp"], data["listingDuration"]["name"]):
            print("[CRON_JOB]:", "PRODUCT EXPIRED")
            expiredProduct(data["id"])


def evaluateArchived():
    archive_threshold = timedelta(days=5)
    cutoff_timestamp = timezone.now() - archive_threshold
    archived_products = models.Product.objects.filter(
        isArchived=True, archivedOn__lte=cutoff_timestamp
    )

    for product in archived_products:
        product.delete()
        print("[CRON_JOB]: ARCHIVED PRODUCT DELETED")


# Views functions above


def main():
    evaluateInteractions()
    evaluateExpired()
    evaluateArchived()


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
    # scheduler.every(4).minutes.do(main)  # Run every 5 minute
    # scheduler.every(20).seconds.do(main)
    # scheduler.every().second.do(main)
    scheduler.run_continuously()
