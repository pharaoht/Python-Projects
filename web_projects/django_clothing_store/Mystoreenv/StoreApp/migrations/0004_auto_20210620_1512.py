# Generated by Django 2.2.4 on 2021-06-20 19:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('StoreApp', '0003_auto_20210620_1442'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='photo',
            field=models.ImageField(null=True, upload_to='uploads/'),
        ),
    ]
