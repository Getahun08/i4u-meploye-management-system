# Generated by Django 5.2 on 2025-05-27 05:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0006_remove_employementdetails_deleted_at'),
    ]

    operations = [
        migrations.AddField(
            model_name='employementdetails',
            name='Isdelete',
            field=models.BooleanField(default=False),
        ),
    ]
