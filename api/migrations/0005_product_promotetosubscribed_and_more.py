# Generated by Django 4.1 on 2023-09-27 19:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_alter_product_price'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='promoteToSubscribed',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='product',
            name='promoteToTradeQuoteBar',
            field=models.BooleanField(default=False),
        ),
    ]