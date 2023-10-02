from django.db import models
from authentication.models import CustomUsers
from django.utils import timezone
from django.utils.text import slugify
import random
import string

# Create your models here.


class Action(models.Model):
    name = models.CharField(max_length=50, unique=True)

    def __str__(self):
        return self.name


class Category(models.Model):
    name = models.CharField(max_length=50, unique=True)

    def __str__(self):
        return self.name


class Measurement(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return f"{self.name}"


class Currency(models.Model):
    name = models.CharField(max_length=10, unique=True)

    def __str__(self):
        return self.name


class Payment(models.Model):
    name = models.CharField(max_length=50, unique=True)

    def __str__(self):
        return self.name


class Delivery(models.Model):
    name = models.CharField(max_length=50, unique=True)

    def __str__(self):
        return self.name


class Contract(models.Model):
    name = models.CharField(max_length=50, unique=True)

    def __str__(self):
        return self.name


class Origin(models.Model):
    name = models.CharField(max_length=100, unique=True)

    def __str__(self):
        return self.name


class ListingDuration(models.Model):
    name = models.CharField(max_length=100, unique=True)

    def __str__(self):
        return self.name


class Product(models.Model):
    by = models.ForeignKey(
        CustomUsers,
        on_delete=models.CASCADE,
    )
    name = models.CharField(max_length=50)
    slug = models.SlugField(unique=True, blank=True)
    action = models.ForeignKey(Action, on_delete=models.SET_NULL, null=True)
    category = models.ForeignKey(
        Category, on_delete=models.SET_NULL, blank=True, null=True
    )
    quantity = models.IntegerField()
    measurement = models.ForeignKey(Measurement, on_delete=models.SET_NULL, null=True)
    price = models.FloatField()
    currency = models.ForeignKey(Currency, on_delete=models.SET_NULL, null=True)
    payment = models.ForeignKey(Payment, on_delete=models.SET_NULL, null=True)
    delivery = models.ForeignKey(Delivery, on_delete=models.SET_NULL, null=True)
    contract = models.ForeignKey(Contract, on_delete=models.SET_NULL, null=True)
    origin = models.ForeignKey(Origin, on_delete=models.SET_NULL, null=True)
    listingDuration = models.ForeignKey(
        ListingDuration,
        on_delete=models.CASCADE,
    )
    promoteToSubscribed = models.BooleanField(default=False)
    promoteToTradeQuoteBar = models.BooleanField(default=False)
    promoteCompanyWebsite = models.BooleanField(default=False)
    isPaidPromoted = models.BooleanField(default=False)  # Imp
    isArchived = models.BooleanField(default=False)  # Imp
    archivedOn = models.DateTimeField(blank=True, null=True)  # Imp
    isExtended = models.BooleanField(default=False)
    isExpired = models.BooleanField(default=False)  # Imp
    expiryDate = models.DateTimeField(blank=True, null=True)  # Imp
    timestamp = models.DateTimeField(default=timezone.now)  # Imp
    openedOn = models.DateTimeField(default=timezone.now)  # Imp

    def __str__(self):
        return self.name

    def save(self, *args, **kwargs):
        if not self.slug:
            base_slug = slugify(self.name)
            random_suffix = "".join(
                random.choices(string.ascii_letters + string.digits, k=8)
            )
            self.slug = f"{base_slug}-{random_suffix}"

        super().save(*args, **kwargs)


class ProductInteractions(models.Model):
    product = models.ForeignKey(
        Product,
        on_delete=models.CASCADE,
    )
    user = models.ForeignKey(
        CustomUsers,
        on_delete=models.CASCADE,
    )
    action = models.ForeignKey(
        Action,
        on_delete=models.CASCADE,
    )
    isCancelled = models.BooleanField(default=False)
    isEmail = models.BooleanField(default=False)
    isWait = models.BooleanField(default=True)
    timestamp = models.BigIntegerField(blank=False, null=False)

    def __str__(self):
        return f"{self.product.name} - {self.user.fullName}"
