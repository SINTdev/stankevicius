from rest_framework import serializers
from . import models
from authentication.serializers import ViewUserSerializer


class ActionSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Action
        fields = "__all__"


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Category
        fields = "__all__"


class MeasurementSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Measurement
        fields = "__all__"


class DeliverySerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Delivery
        fields = "__all__"


class PaymentSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Payment
        fields = "__all__"


class OriginSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Origin
        fields = "__all__"


class CurrencySerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Currency
        fields = "__all__"


class ContractSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Contract
        fields = "__all__"


class ListingDurationSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.ListingDuration
        fields = "__all__"


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Product
        fields = "__all__"


class CreditsPurchasingSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.CreditsPurchasing
        fields = "__all__"


class ViewCreditsPurchasingSerializer(serializers.ModelSerializer):
    user = ViewUserSerializer()

    class Meta:
        model = models.CreditsPurchasing
        fields = "__all__"


class ViewProductSerializer(serializers.ModelSerializer):
    by = ViewUserSerializer()
    action = ActionSerializer()
    category = CategorySerializer()
    measurement = MeasurementSerializer()
    currency = CurrencySerializer()
    payment = PaymentSerializer()
    delivery = DeliverySerializer()
    contract = ContractSerializer()
    origin = OriginSerializer()
    listingDuration = ListingDurationSerializer()

    class Meta:
        model = models.Product
        fields = "__all__"


class ProductInteractionsSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.ProductInteractions
        fields = "__all__"


class HomeProductInteractionsSerializer(serializers.ModelSerializer):
    action = ActionSerializer()

    class Meta:
        model = models.ProductInteractions
        fields = "__all__"


class ViewProductInteractionsSerializer(serializers.ModelSerializer):
    product = ViewProductSerializer()
    user = ViewUserSerializer()
    action = ActionSerializer()

    class Meta:
        model = models.ProductInteractions
        fields = "__all__"


class NewsReleaseSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.NewsRelease
        fields = "__all__"


class ViewNewsReleaseSerializer(serializers.ModelSerializer):
    user = ViewUserSerializer()
    thumbnail_url = serializers.SerializerMethodField()

    class Meta:
        model = models.NewsRelease
        fields = "__all__"

    def get_thumbnail_url(self, obj):
        if obj.thumbnail:
            # Replace "static/news_release_media/" with "assets/"
            thumbnail_url = obj.thumbnail.url.replace(
                "static/news_release_media/", "assets/"
            )
            return thumbnail_url
        return None
