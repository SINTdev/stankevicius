from django.contrib.auth.models import Group
from django.contrib import admin
from . import models

# Register your models here.


class UserAdmin(admin.ModelAdmin):
    exclude = (
        "first_name",
        "last_name",
        "groups",
        "user_permissions",
        "is_active",
        "is_superuser",
        "last_login",
        "date_joined",
        "username",
        "token",
        "emailToken",
    )
    list_display = ("email", "is_admin")
    list_filter = (
        "is_staff",
        "timestamp",
    )

    def is_admin(self, obj):
        pl = "✔️" if obj.is_staff else "❌"
        return pl


admin.site.register(models.CustomUsers, UserAdmin)


admin.site.site_header = "Admin Panel"
admin.site.site_title = "Admin Panel"
admin.site.index_title = "Admin Panel"


# Hide AUTHENTICATION AND AUTHORIZATION

# from django.contrib.auth.models import User

# admin.site.unregister(User)
admin.site.unregister(Group)
