from django.contrib import admin
from . import models
from django.utils.html import mark_safe

# Register your models here.

admin.site.register(models.Action)
admin.site.register(models.Category)
admin.site.register(models.Measurement)
admin.site.register(models.Currency)
admin.site.register(models.Payment)
admin.site.register(models.Delivery)
admin.site.register(models.Contract)
admin.site.register(models.Origin)
admin.site.register(models.ListingDuration)

# Separate the Product in another section "Interactions"
admin.site.register(models.Product)
admin.site.register(models.CreditsPurchasing)
admin.site.register(models.ProductInteractions)


class NewsReleaseAdmin(admin.ModelAdmin):
    list_display = ("title", "category", "author", "display_thumbnail")

    def display_thumbnail(self, obj):
        if obj.thumbnail:
            # Extract the filename from the full path
            filename = obj.thumbnail.name.split("/")[-1]
            thumbnail_url = f"/assets/{filename}"
            return mark_safe(
                f'<a href="{thumbnail_url}" target="_blank">{filename}</a>'
            )
        return "No Thumbnail"

    display_thumbnail.short_description = "Thumbnail"


admin.site.register(models.NewsRelease, NewsReleaseAdmin)
