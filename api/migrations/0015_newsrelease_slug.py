# Generated by Django 4.1 on 2023-11-08 05:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0014_remove_newsrelease_slug'),
    ]

    operations = [
        migrations.AddField(
            model_name='newsrelease',
            name='slug',
            field=models.SlugField(blank=True, unique=True),
        ),
    ]