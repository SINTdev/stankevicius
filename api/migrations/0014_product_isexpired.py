# Generated by Django 4.1 on 2023-09-06 04:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0013_product_isarchived_product_isextended'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='isExpired',
            field=models.BooleanField(default=False),
        ),
    ]