from rest_framework import status
from . import serializers
from . import models
from django.http.response import JsonResponse
from django.db.models import Q
from rest_framework.decorators import (
    api_view,
    authentication_classes,
    permission_classes,
)
from rest_framework.parsers import JSONParser
from .helpers import send_forget_password_mail, send_email_verfication_mail
from django.contrib.auth.hashers import check_password, make_password
import uuid


@api_view(["POST"])
@permission_classes([])
@authentication_classes([])
def validate(request):
    if request.method == "POST":
        # VALIDATE A USER
        data = JSONParser().parse(request)
        email = data["email"]
        password = data["password"]
        if email and password is not None:
            try:
                user = models.CustomUsers.objects.get(email=email)
            except:
                return JsonResponse({"message": "No account exists."}, safe=False)
            if user:
                if check_password(password, user.password) or password == user.password:
                    if user.isEmailVerified:
                        SerializedData = serializers.ViewUserSerializer(
                            user, many=False
                        )
                        return JsonResponse(SerializedData.data, safe=False)
                    else:
                        return JsonResponse(
                            {"message": "Verify your email first. Check mail."},
                            safe=False,
                        )
                else:
                    return JsonResponse({"message": "Incorrect password."}, safe=False)


# @api_view(["POST"])
# @permission_classes([])
# @authentication_classes([])
# def confirm_email(request):
#     if request.method == "POST":
#         # CONFIRM A USER
#         data = JSONParser().parse(request)
#         Users = models.CustomUsers.objects.all()
#         email = data["email"]
#         password = data["password"]
#         if email and password is not None:
#             count = Users.filter(email=email).count()
#             if count != 0:
#                 data = Users.filter(email=email).values("password").first()
#                 if (
#                     check_password(password, data["password"])
#                     or password == data["password"]
#                 ):
#                     userData = Users.filter(email=email).first()
#                     SerializedData = serializers.ViewUserSerializer(
#                         userData, many=False
#                     )
#                     return JsonResponse(SerializedData.data, safe=False)
#                 else:
#                     return JsonResponse({"message": "Incorrect password."}, safe=False)
#             else:
#                 return JsonResponse(
#                     {"message": "No account found."},
#                     status=status.HTTP_200_OK,
#                 )
#         return JsonResponse({"message": "empty"}, status=status.HTTP_200_OK)


@api_view(["POST", "PUT"])
@permission_classes([])
@authentication_classes([])
def reset(request):
    if request.method == "POST":
        identifier = request.data["identifier"]
        try:
            user = models.CustomUsers.objects.get(
                Q(email=identifier) | Q(username=identifier)
            )
        except:
            return JsonResponse(
                {"message": "No user with this email or username exists."},
                status=status.HTTP_200_OK,
            )
        if user:
            token = str(uuid.uuid4())
            try:
                user.token = token
                user.save()
                send_forget_password_mail(user.email, token, request.data["client_url"])
                return JsonResponse({}, status=status.HTTP_200_OK)
            except Exception as e:
                print(e)
                return JsonResponse(
                    {"message": "System error."}, status=status.HTTP_200_OK
                )
    if request.method == "PUT":
        try:
            token = request.data["token"]
            user = models.CustomUsers.objects.get(token=token)
            if user and request.data["token"] != "":
                try:
                    user.password = make_password(request.data["password"])
                    user.token = ""
                    user.save()
                    return JsonResponse({}, status=status.HTTP_200_OK)
                except Exception as e:
                    print(e)
                    return JsonResponse(
                        {"message": "System error."}, status=status.HTTP_200_OK
                    )
        except:
            return JsonResponse(
                {"message": "Reset not valid."}, status=status.HTTP_200_OK
            )


@api_view(["POST", "PUT"])
@permission_classes([])
@authentication_classes([])
def verify(request):
    if request.method == "PUT":
        try:
            emailToken = request.data["emailToken"]
            user = models.CustomUsers.objects.get(emailToken=emailToken)
            if user and request.data["emailToken"] != "":
                try:
                    user.emailToken = ""
                    user.isEmailVerified = True
                    user.save()
                    return JsonResponse({}, status=status.HTTP_200_OK)
                except Exception as e:
                    print(e)
                    return JsonResponse(
                        {"message": "System error."}, status=status.HTTP_200_OK
                    )
        except:
            return JsonResponse(
                {"message": "Reset not valid."}, status=status.HTTP_200_OK
            )


@api_view(["POST", "PUT", "GET"])
@permission_classes([])
@authentication_classes([])
def user(request, pk=None):
    if request.method == "GET":
        # GET A USER BY ID
        if pk is None:
            return JsonResponse({"message": "No user id given!"}, safe=False)
        data = JSONParser().parse(request)
        instance = models.CustomUsers.objects.get(pk=int(pk))
        object = serializers.ViewUserSerializer(instance, many=False)
        return JsonResponse(object.data, safe=False)
    if request.method == "POST":
        # ADD A USER
        data = JSONParser().parse(request)
        token = str(uuid.uuid4())
        serializer = serializers.CustomUserSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            user = models.CustomUsers.objects.get(email=data["email"])
            user.emailToken = token
            user.save()
            send_email_verfication_mail(user.email, token, data["client_url"])
            SerializedData = serializers.ViewUserSerializer(user, many=False)
            return JsonResponse(SerializedData.data, status=status.HTTP_201_CREATED)
        print(serializer.errors)
        return JsonResponse(
            {"message": serializer.errors}, status=status.HTTP_202_ACCEPTED
        )
    if request.method == "PUT":
        # UPDATE A USER
        if pk is None:
            return JsonResponse({"message": "No user id given!"}, safe=False)

        data = JSONParser().parse(request)
        user = models.CustomUsers.objects.get(pk=int(pk))

        # Check if the sent password matches (you can use your password checking logic)
        if (
            check_password(data["password"], user.password)
            or data["password"] == user.password
        ):
            try:
                # Check which profile data is changed and update them
                if "fullName" in data:
                    user.fullName = data["fullName"]
                if "email" in data:
                    user.email = data["email"]
                if "companyName" in data:
                    user.companyName = data["companyName"]
                if "companyURL" in data:
                    user.companyURL = data["companyURL"]
                if "offer" in data:
                    user.offer = data["offer"]
                if "countryCode" in data:
                    user.countryCode = data["countryCode"]
                if "phoneNumber" in data:
                    user.phoneNumber = data["phoneNumber"]

                user.save()
            except:
                pass

            SerializedData = serializers.ViewUserSerializer(user, many=False)
            return JsonResponse(SerializedData.data, status=status.HTTP_200_OK)
        return JsonResponse(
            {"message": "Password is wrong."},
            safe=False,
            status=status.HTTP_202_ACCEPTED,
        )
