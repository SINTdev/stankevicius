# Generated by Django 4.1 on 2023-09-29 00:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0005_product_promotetosubscribed_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='expiryDate',
            field=models.DateTimeField(blank=True, null=True),
        ),
    ]