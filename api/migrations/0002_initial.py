# Generated by Django 4.1 on 2023-09-14 18:57

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='productinteractions',
            name='user',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
        migrations.AddField(
            model_name='product',
            name='action',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.action'),
        ),
        migrations.AddField(
            model_name='product',
            name='by',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
        migrations.AddField(
            model_name='product',
            name='category',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='api.category'),
        ),
        migrations.AddField(
            model_name='product',
            name='contract',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.contract'),
        ),
        migrations.AddField(
            model_name='product',
            name='currency',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.currency'),
        ),
        migrations.AddField(
            model_name='product',
            name='delivery',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.delivery'),
        ),
        migrations.AddField(
            model_name='product',
            name='listingDuration',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.listingduration'),
        ),
        migrations.AddField(
            model_name='product',
            name='measurement',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.measurement'),
        ),
        migrations.AddField(
            model_name='product',
            name='origin',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.origin'),
        ),
        migrations.AddField(
            model_name='product',
            name='payment',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.payment'),
        ),
    ]