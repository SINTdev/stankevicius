from rest_framework import serializers
from . import models


class CustomUserSerializer(serializers.ModelSerializer):
    """
    Currently unused in preference of the below.
    """

    password = serializers.CharField(min_length=8, write_only=True)

    class Meta:
        model = models.CustomUsers
        fields = (
            "email",
            "fullName",
            "countryCode",
            "phoneNumber",
            "password",
            "companyName",
            "companyURL",
            "is_staff",
            "offer",
            "is2FA",
        )
        extra_kwargs = {"password": {"write_only": True}}

    def create(self, validated_data):
        password = validated_data.pop("password", None)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance


class ViewUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.CustomUsers
        fields = (
            "id",
            "email",
            "fullName",
            "countryCode",
            "phoneNumber",
            "companyName",
            "companyURL",
            "is_staff",
            "offer",
            "is2FA",
            "credits",
            "secret2FA",
            "lastLogin",
            "isEmailVerified",
            "timestamp",
        )


class ViewAllUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.CustomUsers
        fields = ("id", "email", "fullName", "credits")
