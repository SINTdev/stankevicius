# Generated by Django 4.2.1 on 2023-08-18 15:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('authentication', '0003_customusers_token'),
    ]

    operations = [
        migrations.AddField(
            model_name='customusers',
            name='isEmailVerified',
            field=models.BooleanField(default=False),
        ),
    ]
