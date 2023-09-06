from django.urls import path, re_path
from . import views

urlpatterns = [
    path("options", views.options, name="options"),
    path("product", views.product, name="product"),
    re_path(r"^product/(?P<pk>[0-9]+)$", views.product),
    path("products", views.products, name="products"),
    re_path(r"^products/(?P<pk>[0-9]+)$", views.products),
    path("myproducts", views.myproducts, name="myproducts"),
    re_path(r"^myproducts/(?P<pk>[0-9]+)$", views.myproducts),
    path("interactions", views.interactions, name="interactions"),
    re_path(r"^interactions/(?P<pk>[0-9]+)$", views.interactions),
]
