from django.urls import path, re_path
from . import views

urlpatterns = [
    path("validate", views.validate, name="validate"),
    path("reset", views.reset, name="reset"),
    path("verify", views.verify, name="verify"),
    path("user", views.user, name="user"),
    path("allusers", views.allusers, name="allusers"),
    re_path(r"^user/(?P<pk>[0-9]+)$", views.user),
    path("verify2fa", views.verify2fa, name="verify2fa"),
    re_path(r"^verify2fa/(?P<pk>[0-9]+)$", views.verify2fa),
]
