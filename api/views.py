from django.shortcuts import render
from django.http.response import JsonResponse
from django.shortcuts import redirect
from rest_framework.decorators import (
    api_view,
    authentication_classes,
    permission_classes,
)
from . import models
from . import serializers
from . import constants
from rest_framework import status
from rest_framework.parsers import JSONParser
from django.contrib.auth.hashers import make_password
import base64
from authentication.models import CustomUsers
from authentication.serializers import ViewUserSerializer
from .helpers import email_new_listing, test_email
from django.utils import timezone
from datetime import timedelta
import stripe

stripe.api_key = "sk_test_51LyNIZJwTuApoB7Ms8joJ1fORtVdu9sohKVSy1KoZJALIWKCsv7sST3AVYfWpfoEis9gvsPK6JRlZLyFFQhjmKhG00VJdbjvll"
# test_email()


def initialize_backend():
    try:
        # Check if admin exists
        admin_exists = CustomUsers.objects.filter(email="admin@admin.com").exists()
        if not admin_exists:
            # Add admin user
            CustomUsers.objects.create_user(
                password="admin",
                email="admin@admin.com",
                name="Admin",
                credits=999999999999999999,
                is_staff=True,
                is_superuser=True,
                IsEmailVerified=True,
            )
            print("[INITIALIZATION][SUCCESS]: Admin user added")
        else:
            print("[INITIALIZATION][EXISTS]: Admin user already exists")

        # Populate
        if models.Action.objects.count() == 0:
            models.Action.objects.bulk_create(
                [models.Action(name=value) for value in constants.ACTIONS]
            )
            print("[INITIALIZATION][SUCCESS]: ACTIONS populated")
        else:
            print("[INITIALIZATION][EXISTS]: ACTIONS already populated")

        if models.Category.objects.count() == 0:
            models.Category.objects.bulk_create(
                [models.Category(name=value) for value in constants.CATEGORIES]
            )
            print("[INITIALIZATION][SUCCESS]: CATEGORIES populated")
        else:
            print("[INITIALIZATION][EXISTS]: CATEGORIES already populated")

        if models.Measurement.objects.count() == 0:
            models.Measurement.objects.bulk_create(
                [models.Measurement(name=value) for value in constants.MEASUREMENTS]
            )
            print("[INITIALIZATION][SUCCESS]: MEASUREMENTS populated")
        else:
            print("[INITIALIZATION][EXISTS]: MEASUREMENTS already populated")

        if models.Currency.objects.count() == 0:
            models.Currency.objects.bulk_create(
                [models.Currency(name=value) for value in constants.CURRENCIES]
            )
            print("[INITIALIZATION][SUCCESS]: CURRENCIES populated")
        else:
            print("[INITIALIZATION][EXISTS]: CURRENCIES already populated")

        if models.Payment.objects.count() == 0:
            models.Payment.objects.bulk_create(
                [models.Payment(name=value) for value in constants.PAYMENTS]
            )
            print("[INITIALIZATION][SUCCESS]: PAYMENTS populated")
        else:
            print("[INITIALIZATION][EXISTS]: PAYMENTS already populated")

        if models.Delivery.objects.count() == 0:
            models.Delivery.objects.bulk_create(
                [models.Delivery(name=value) for value in constants.DELIVERIES]
            )
            print("[INITIALIZATION][SUCCESS]: DELIVERIES populated")
        else:
            print("[INITIALIZATION][EXISTS]: DELIVERIES already populated")

        if models.Origin.objects.count() == 0:
            models.Origin.objects.bulk_create(
                [models.Origin(name=value) for value in constants.ORIGINS],
                ignore_conflicts=True,
            )
            print("[INITIALIZATION][SUCCESS]: ORIGINS populated")
        else:
            print("[INITIALIZATION][EXISTS]: ORIGINS already populated")

        if models.Contract.objects.count() == 0:
            models.Contract.objects.bulk_create(
                [models.Contract(name=value) for value in constants.CONTRACTS]
            )
            print("[INITIALIZATION][SUCCESS]: CONTRACTS populated")
        else:
            print("[INITIALIZATION][EXISTS]: CONTRACTS already populated")

        if models.ListingDuration.objects.count() == 0:
            models.ListingDuration.objects.bulk_create(
                [
                    models.ListingDuration(name=value)
                    for value in constants.LISTING_DURATIONS
                ]
            )
            print("[INITIALIZATION][SUCCESS]: LISTING_DURATIONS populated")
        else:
            print("[INITIALIZATION][EXISTS]: LISTING_DURATIONS already populated")

    except Exception as e:
        print("[INITIALIZATION][ERROR]:", str(e))


# Call the function to initialize the backend
initialize_backend()


# @api_view(["POST"])
# @permission_classes([])
# @authentication_classes([])
# def checkoutsession(request):
#     if request.method == "POST":
#         try:
#             data = JSONParser().parse(request)
#             quantity = int(data["amount"])
#             client = data["client"]
#             email = data["email"]
#             user_identifier = int(data["user_identifier"])
#             payment_method = data["payment_method"]

#             # Create a price object if it doesn't exist
#             price = get_or_create_price()

#             entry = createCreditEntry(
#                 {"user": user_identifier, "amount": quantity}, True
#             )

#             checkout_session = stripe.checkout.Session.create(
# success_url=client
# + f'client/credit?entry={str(entry)}&amount={str(data["amount"])}',
#                 cancel_url=client + "client/credit?cancelled=true",
#                 mode="payment",
#                 customer_email=email,
#                 line_items=[
#                     {
#                         "price": price.id,  # Use the price object created above
#                         "quantity": quantity,
#                     }
#                 ],
#                 metadata={"user_identifier": user_identifier},
#             )
#             return JsonResponse({"url": checkout_session.url}, status=200)
#         except Exception as e:
#             return JsonResponse(
#                 {"message": "[SESSION CHECKOUT]: " + str(e)}, status=200
#             )


@api_view(["POST"])
@permission_classes([])
@authentication_classes([])
def checkoutsession(request):
    if request.method == "POST":
        try:
            data = JSONParser().parse(request)
            quantity = int(data["amount"])
            email = data["email"]
            client = data["client"]
            user_identifier = int(data["user_identifier"])
            payment_method = data[
                "payment_method"
            ]  # Use paymentMethod from the frontend

            # Create a price object if it doesn't exist
            price = get_or_create_price()
            customer = get_or_create_customer(
                email, payment_method["paymentMethod"]["id"]
            )

            entry = createCreditEntry(
                {"user": user_identifier, "amount": quantity}, True
            )

            # Create a Payment Intent
            payment_intent = stripe.PaymentIntent.create(
                amount=quantity * 100,  # Amount in cents
                currency="usd",
                payment_method=payment_method["paymentMethod"][
                    "id"
                ],  # Use the paymentMethod from the frontend
                confirmation_method="manual",
                setup_future_usage="on_session",
                confirm=True,
                customer=customer.id,
                receipt_email=email,
                metadata={"user_identifier": user_identifier},
                return_url=client
                + f'client/credit?entry={str(entry)}&amount={str(data["amount"])}',
            )
            print(payment_intent.status)
            # Check if the payment intent is succeeded
            if payment_intent.status == "succeeded":
                return JsonResponse(
                    {
                        "isSuccess": True,
                        "message": "Payment successful",
                        "entry": entry,
                    },
                    status=200,
                )
            else:
                return JsonResponse(
                    {
                        "isSuccess": False,
                        "message": payment_intent.status,
                    },
                    status=200,  # Return a 400 status code for failure
                )

        except Exception as e:
            print(e)
            return JsonResponse(
                {
                    "isSuccess": False,
                    "message": str(e),
                },
                status=200,
            )


def get_or_create_customer(email, payment_method):
    customer = None
    customers = stripe.Customer.list(email=email, limit=1)

    if customers.data:
        print("[CUSTOMER HUNT]: Found existing customer")
        customer = customers.data[0]

        # Update the customer's payment method
        stripe.PaymentMethod.attach(
            payment_method,
            customer=customer.id,
        )
        customer = stripe.Customer.modify(
            customer.id,
            invoice_settings={"default_payment_method": payment_method},
        )
    else:
        print("[CUSTOMER HUNT]: Creating new customer")
        customer = stripe.Customer.create(
            email=email,
            payment_method=payment_method,
            invoice_settings={"default_payment_method": payment_method},
        )

    return customer


def get_or_create_price():
    # Check if a price object already exists with the desired unit amount (1 USD in cents)
    existing_prices = stripe.Price.list(unit_amount=100, currency="usd")

    if existing_prices:
        # If an existing price is found, return its ID
        return existing_prices.data[0]

    # If no existing price is found, create a new product and price
    product = stripe.Product.create(name="Credits")

    price = stripe.Price.create(
        unit_amount=100,  # $1 in cents
        currency="usd",
        product=product.id,  # Attach the price to the product
    )

    return price


@api_view(["POST", "GET", "PUT"])
@permission_classes([])
@authentication_classes([])
def credits(request, pk=None):
    if request.method == "GET":
        if pk is None:
            now = timezone.now()
            last_30_days = now - timedelta(days=30)

            # Retrieve all CreditsPurchasing objects and order them by the timestamp
            credits = models.CreditsPurchasing.objects.filter(isPaid=True).order_by(
                "-timestamp"
            )

            final_data = [
                {
                    **serializers.ViewCreditsPurchasingSerializer(credit).data,
                    "isLast30Days": (
                        True if credit.timestamp >= last_30_days else False
                    ),
                }
                for credit in credits
            ]

            return JsonResponse(final_data, safe=False)
        instance = models.CreditsPurchasing.objects.filter(
            user__id=int(pk), isPaid=True
        ).order_by("-timestamp")
        final_data = serializers.ViewCreditsPurchasingSerializer(
            instance, many=True
        ).data
        return JsonResponse(final_data, safe=False)
    if request.method == "POST":
        data = JSONParser().parse(request)
        return createCreditEntry(data)
    if request.method == "PUT":
        data = JSONParser().parse(request)
        return changeStatusToPaid(int(data["id"]))


@api_view(["GET", "POST"])
@permission_classes([])
@authentication_classes([])
def options(request):
    if request.method == "GET":
        # Serialize all objects and combine them into a single dictionary
        options_data = {}

        # Serialize Action objects
        actions = models.Action.objects.all()
        actions_serializer = serializers.ActionSerializer(actions, many=True)
        options_data["actions"] = actions_serializer.data

        # Serialize Category objects
        categories = models.Category.objects.all()
        categories_serializer = serializers.CategorySerializer(categories, many=True)
        options_data["categories"] = categories_serializer.data

        # Serialize Measurement objects
        measurements = models.Measurement.objects.all()
        measurements_serializer = serializers.MeasurementSerializer(
            measurements, many=True
        )
        options_data["measurements"] = measurements_serializer.data

        # Serialize Currency objects
        currencies = models.Currency.objects.all()
        currencies_serializer = serializers.CurrencySerializer(currencies, many=True)
        options_data["currencies"] = currencies_serializer.data

        # Serialize Payment objects
        payments = models.Payment.objects.all()
        payments_serializer = serializers.PaymentSerializer(payments, many=True)
        options_data["payments"] = payments_serializer.data

        # Serialize Delivery objects
        deliveries = models.Delivery.objects.all()
        deliveries_serializer = serializers.DeliverySerializer(deliveries, many=True)
        options_data["deliveries"] = deliveries_serializer.data

        # Serialize Contract objects
        contracts = models.Contract.objects.all()
        contracts_serializer = serializers.ContractSerializer(contracts, many=True)
        options_data["contracts"] = contracts_serializer.data

        # Serialize Origin objects
        origins = models.Origin.objects.all()
        origins_serializer = serializers.OriginSerializer(origins, many=True)
        options_data["origins"] = origins_serializer.data

        # Serialize ListingDuration objects
        listing_durations = models.ListingDuration.objects.all()
        listing_durations_serializer = serializers.ListingDurationSerializer(
            listing_durations, many=True
        )
        options_data["listing_durations"] = listing_durations_serializer.data

        return JsonResponse(options_data)
    if request.method == "POST":
        # Serialize Category objects
        categories = models.Category.objects.all()
        categories_serializer = serializers.CategorySerializer(categories, many=True)
        return JsonResponse(categories_serializer.data, safe=False)


@api_view(["POST", "GET", "PUT"])
@permission_classes([])
@authentication_classes([])
def products(request, pk=None):
    if request.method == "GET":
        instance = models.Product.objects.filter(
            isExpired=False, isArchived=False, category__isnull=False
        ).order_by("-timestamp")
        # if pk is not None:
        #     instance = instance.exclude(by__id=pk)
        final_data = serializers.ViewProductSerializer(instance, many=True).data
        output = []
        for data in final_data:
            if pk is not None:
                lastObject = (
                    models.ProductInteractions.objects.filter(
                        user__id=pk, product__id=data["id"]
                    )
                    .order_by("-timestamp")
                    .first()
                )
            else:
                lastObject = None

            data["lastActivity"] = (
                serializers.HomeProductInteractionsSerializer(lastObject).data
                if lastObject is not None
                else None
            )
            output.append(data)

        return JsonResponse(output, safe=False)
    if request.method == "POST":
        # ADD A PRODUCT
        data = JSONParser().parse(request)
        serializer = serializers.ProductSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            # email_new_listing(
            #     serializers.ViewProductSerializer(
            #         models.Product.objects.get(pk=serializer.data["id"])
            #     ).data
            # )
            return JsonResponse(
                {"content": serializer.data}, status=status.HTTP_202_ACCEPTED
            )
        print(serializer.errors)
        return JsonResponse(
            {"message": "Not valid data!"}, status=status.HTTP_202_ACCEPTED
        )
    if request.method == "PUT":
        # Update the existing product
        try:
            instance = models.Product.objects.get(pk=pk)
        except models.Product.DoesNotExist:
            return JsonResponse(
                {"message": "Product not found"}, status=status.HTTP_202_ACCEPTED
            )
        data = JSONParser().parse(request)
        serializer = serializers.ProductSerializer(instance, data=data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(
                {"content": serializer.data}, status=status.HTTP_202_ACCEPTED
            )
        print(serializer.errors)
        return JsonResponse(
            {"message": "Not valid data!"}, status=status.HTTP_202_ACCEPTED
        )


@api_view(["GET"])
@permission_classes([])
@authentication_classes([])
def promotedproducts(request, pk=None):
    if request.method == "GET":
        instance = models.Product.objects.filter(
            isExpired=False,
            isArchived=False,
            category__isnull=False,
            promoteToTradeQuoteBar=True,
        ).order_by("-timestamp")
        # if pk is not None:
        #     instance = instance.exclude(by__id=pk)
        final_data = serializers.ViewProductSerializer(instance, many=True).data
        output = []
        for data in final_data:
            if pk is not None:
                lastObject = (
                    models.ProductInteractions.objects.filter(
                        user__id=pk, product__id=data["id"]
                    )
                    .order_by("-timestamp")
                    .first()
                )
            else:
                lastObject = None

            data["lastActivity"] = (
                serializers.HomeProductInteractionsSerializer(lastObject).data
                if lastObject is not None
                else None
            )
            output.append(data)

        return JsonResponse(output, safe=False)


@api_view(["POST", "GET"])
@permission_classes([])
@authentication_classes([])
def myproducts(request, pk=None):
    if request.method == "GET":
        if pk is None:
            return JsonResponse([], safe=False)
        instance = models.Product.objects.filter(by__id=pk).order_by("-timestamp")
        final_data = serializers.ViewProductSerializer(instance, many=True).data
        return JsonResponse(final_data, safe=False)


@api_view(["POST", "GET"])
@permission_classes([])
@authentication_classes([])
def corporateproducts(request):
    if request.method == "GET":
        instance = models.Product.objects.all().order_by("-timestamp")
        final_data = serializers.ViewProductSerializer(instance, many=True).data
        return JsonResponse(final_data, safe=False)


@api_view(["POST", "GET"])
@permission_classes([])
@authentication_classes([])
def product(request, pk=None, user_id=None):
    if request.method == "GET":
        if pk is None:
            return JsonResponse({"message": "Not valid slug!"}, safe=False)
        if user_id is None:
            return JsonResponse({"message": "Not valid session!"}, safe=False)
        try:
            instance = models.Product.objects.get(slug=pk)
            session = CustomUsers.objects.get(pk=int(user_id))
            if session.is_staff or session.id == instance.by.id:
                final_data = serializers.ViewProductSerializer(instance).data
                return JsonResponse(final_data)
        except Exception as e:
            print(e)
        return JsonResponse({"message": "Not valid slug!"}, safe=False)
    if request.method == "POST":
        data = JSONParser().parse(request)
        inr = models.Product.objects.get(pk=pk)
        if data["type"] == "archive":
            # Archive product
            inr.isArchived = True
            inr.archivedOn = timezone.now()
        elif data["type"] == "expire":
            # Expire product
            inr.isExpired = True
            inr.expiryDate = timezone.now()
        elif data["type"] == "extend":
            # Expire product
            inr.isExpired = False
            inr.isExtended = True
            inr.listingDuration = models.ListingDuration.objects.get(name="7 days")
            inr.timestamp = timezone.now()
        inr.save()
        return JsonResponse({})


@api_view(["POST", "PUT", "GET"])
@permission_classes([])
@authentication_classes([])
def interactions(request, pk=None):
    if request.method == "GET":
        try:
            instance = models.ProductInteractions.objects.all()
            if pk is not None:
                instance = instance.get(pk=int(pk))
            object = serializers.ViewProductInteractionsSerializer(
                instance, many=(pk is None)
            )
            return JsonResponse(object.data, safe=False)
        except:
            return JsonResponse({"message": "Not valid id!"}, safe=False)
    if request.method == "POST":
        # ADD A PRODUCT INTERACTION
        data = JSONParser().parse(request)
        serializer = serializers.ProductInteractionsSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(
                {"content": serializer.data}, status=status.HTTP_202_ACCEPTED
            )
        print(serializer.errors)
        return JsonResponse(
            {"message": "Not valid data!"}, status=status.HTTP_202_ACCEPTED
        )
    if request.method == "PUT":
        # CANCEL A PRODUCT INTERACTION
        data = JSONParser().parse(request)
        try:
            if data["id"] is not None:
                instance = models.ProductInteractions.objects.get(pk=int(data["id"]))
                instance.isCancelled = True
                instance.save()
                return JsonResponse({}, safe=False)
            else:
                return JsonResponse({"message": "Provide proper id!"}, safe=False)
        except Exception as e:
            print(e)
            return JsonResponse({"message": "Not valid ids!"}, safe=False)


@api_view(["POST"])
@permission_classes([])
@authentication_classes([])
def category(request):
    if request.method == "POST":
        data = JSONParser().parse(request)

        # Extract the payload and operation from the JSON data
        payload = data.get("payload")
        operation = data.get("operation")

        if operation == "add":
            # Create a new category with the provided value
            name = payload.get("value")
            if name:
                models.Category.objects.create(name=name)
                return JsonResponse(
                    {"message": "Category added successfully."}, safe=False
                )
            else:
                return JsonResponse(
                    {"message": "Invalid payload for 'add' operation."}, safe=False
                )

        elif operation == "update":
            # Update an existing category with the provided id and value
            category_id = payload.get("id")
            name = payload.get("value")
            if category_id and name:
                try:
                    category = models.Category.objects.get(id=int(category_id))
                    category.name = name
                    category.save()
                    return JsonResponse(
                        {"message": "Category updated successfully."}, safe=False
                    )
                except models.Category.DoesNotExist:
                    return JsonResponse({"message": "Category not found."}, safe=False)
            else:
                return JsonResponse(
                    {"message": "Invalid payload for 'update' operation."}, safe=False
                )

        elif operation == "delete":
            # Delete an existing category with the provided id
            category_id = payload.get("id")
            if category_id:
                try:
                    category = models.Category.objects.get(id=int(category_id))
                    category.delete()
                    return JsonResponse(
                        {"message": "Category deleted successfully."}, safe=False
                    )
                except models.Category.DoesNotExist:
                    return JsonResponse({"message": "Category not found."}, safe=False)
            else:
                return JsonResponse(
                    {"message": "Invalid payload for 'delete' operation."}, safe=False
                )

        else:
            return JsonResponse({"message": "Invalid operation."}, safe=False)


@api_view(["POST", "GET"])
@permission_classes([])
@authentication_classes([])
def corporateusers(request):
    if request.method == "GET":
        now = timezone.now()
        last_24_hours = now - timedelta(hours=24)
        last_7_days = now - timedelta(days=7)
        last_30_days = now - timedelta(days=30)
        instance = CustomUsers.objects.filter().order_by("-timestamp")
        final_data = [
            {
                **ViewUserSerializer(user).data,
                "lastLogin": user.lastLogin.strftime("%Y-%m-%dT%H:%M:%S.%fZ")
                if user.lastLogin
                else None,
                "status": (
                    "24h"
                    if user.lastLogin and user.lastLogin >= last_24_hours
                    else "7days"
                    if user.lastLogin and user.lastLogin >= last_7_days
                    else "30days"
                    if user.lastLogin and user.lastLogin >= last_30_days
                    else "30days"
                ),
            }
            for user in instance
        ]

        return JsonResponse(final_data, safe=False)


@api_view(["GET", "POST", "PUT", "DELETE"])
@permission_classes([])
@authentication_classes([])
def newsreleases(request, pk=None, user_id=None):
    if request.method == "GET":
        if pk is None:
            return JsonResponse({"message": "Not valid slug!"}, safe=False)
        if user_id is None:
            return JsonResponse({"message": "Not valid session!"}, safe=False)
        try:
            instance = models.NewsRelease.objects.get(slug=pk)
            session = CustomUsers.objects.get(pk=int(user_id))
            if session.is_staff or session.id == instance.user.id:
                final_data = serializers.ViewNewsReleaseSerializer(instance).data
                return JsonResponse(final_data)
        except Exception as e:
            print(e)
        return JsonResponse({"message": "Not valid slug!"}, safe=False)

    if request.method == "POST":
        serializer = serializers.NewsReleaseSerializer(data=request.data)
        session = CustomUsers.objects.get(pk=int(request.data["user"]))
        if session.credits < 20:
            return JsonResponse(
                {"message": "Not enough credits!"},
                status=status.HTTP_200_OK,
            )

        if serializer.is_valid():
            obhj = serializer.save()
            obhj.user.credits = obhj.user.credits - 20
            obhj.user.save()
            createCreditEntry({"user": obhj.user.id, "amount": 20, "mode": "news", "isPaid": True})
            return JsonResponse(
                {"content": serializer.data}, status=status.HTTP_201_CREATED
            )
        return JsonResponse(
            {"message": "Not valid data!", "errors": serializer.errors},
            status=status.HTTP_200_OK,
        )

    if request.method == "PUT":
        try:
            instance = models.NewsRelease.objects.get(pk=pk)
        except models.NewsRelease.DoesNotExist:
            return JsonResponse(
                {"message": "NewsRelease not found"}, status=status.HTTP_404_NOT_FOUND
            )
        serializer = serializers.NewsReleaseSerializer(
            instance, data=request.data, partial=True
        )

        if serializer.is_valid():
            serializer.save()
            return JsonResponse({"content": serializer.data}, status=status.HTTP_200_OK)

        print(serializer.errors)
        return JsonResponse(
            {"message": "Not valid data!", "errors": serializer.errors},
            status=status.HTTP_200_OK,
        )
    if request.method == "DELETE":
        if pk is None:
            return JsonResponse({"message": "Not valid slug!"}, safe=False)
        if user_id is None:
            return JsonResponse({"message": "Not valid session!"}, safe=False)
        try:
            instance = models.NewsRelease.objects.get(slug=pk)
            session = CustomUsers.objects.get(pk=int(user_id))
            if session.is_staff or session.id == instance.user.id:
                instance.delete()
                return JsonResponse(
                    {"message": "Release deleted successfully."}, safe=False
                )
        except Exception as e:
            print(e)
        return JsonResponse({"message": "Not valid slug!"}, safe=False)


@api_view(["POST", "GET"])
@permission_classes([])
@authentication_classes([])
def allreleasenews(request):
    if request.method == "GET":
        instance = models.NewsRelease.objects.all().order_by("-timestamp")
        final_data = serializers.ViewNewsReleaseSerializer(instance, many=True).data
        return JsonResponse(final_data, safe=False)


# Functions


def createCreditEntry(data, returnId=False):
    serializer = serializers.CreditsPurchasingSerializer(data=data)
    if serializer.is_valid():
        instance = serializer.save()
        if returnId:
            return instance.id
        return JsonResponse(
            {"content": serializer.data}, status=status.HTTP_202_ACCEPTED
        )
    print(serializer.errors)
    return JsonResponse({"message": "Not valid data!"}, status=status.HTTP_202_ACCEPTED)


def changeStatusToPaid(id):
    if id:
        entry = models.CreditsPurchasing.objects.get(id=int(id))
        if not entry.isPaid:
            entry.isPaid = True
            entry.user.credits = entry.user.credits + entry.amount
            entry.user.save()
            entry.save()
        SerializedData = serializers.ViewUserSerializer(entry.user, many=False)
        return JsonResponse(SerializedData.data, status=status.HTTP_202_ACCEPTED)
    return JsonResponse({"message": "Not valid data!"}, status=status.HTTP_202_ACCEPTED)
