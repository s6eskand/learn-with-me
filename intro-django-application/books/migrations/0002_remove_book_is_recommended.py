# Generated by Django 3.0.4 on 2020-06-20 23:51

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('books', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='book',
            name='is_recommended',
        ),
    ]