# Generated by Django 4.1 on 2023-11-08 05:27

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0013_newsrelease_slug'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='newsrelease',
            name='slug',
        ),
    ]