# Generated by Django 4.1 on 2023-09-06 10:06

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0015_product_openedon'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='timestamp',
            field=models.DateTimeField(default=django.utils.timezone.now),
        ),
    ]
