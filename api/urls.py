from django.urls import path, re_path
from . import views

urlpatterns = [
    path("options", views.options, name="options"),
    path("product", views.product, name="product"),
    re_path(r"^product/(?P<pk>[\w-]+)/(?P<user_id>[\w-]+)$", views.product),
    re_path(r"^product/(?P<pk>[0-9]+)$", views.product),
    path("products", views.products, name="products"),
    re_path(r"^products/(?P<pk>[0-9]+)$", views.products),
    path("promotedproducts", views.promotedproducts, name="promotedproducts"),
    re_path(r"^promotedproducts/(?P<pk>[0-9]+)$", views.promotedproducts),
    path("corporateproducts", views.corporateproducts, name="corporateproducts"),
    path("corporateusers", views.corporateusers, name="corporateusers"),
    path("myproducts", views.myproducts, name="myproducts"),
    re_path(r"^myproducts/(?P<pk>[0-9]+)$", views.myproducts),
    path("interactions", views.interactions, name="interactions"),
    re_path(r"^interactions/(?P<pk>[0-9]+)$", views.interactions),
    path("category", views.category, name="category"),
    path("checkoutsession", views.checkoutsession, name="checkoutsession"),
    path("credits", views.credits, name="credits"),
    re_path(r"^credits/(?P<pk>[0-9]+)$", views.credits),
]
