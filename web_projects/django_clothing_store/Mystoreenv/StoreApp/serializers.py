# Django rest framework uses serializers to handle data between JSON oe XML and native Python objects
# package data when its coming to the server and unpackage data when its coming from the server
from rest_framework.serializers import ModelSerializer
from rest_framework import serializers
from .models import User
from .models import Product
from .models import Category
from django.contrib.auth.hashers import make_password
from django.db import models
from rest_framework.validators import UniqueValidator

# Model serializer, less customizable but more simple to setup


class UserSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = [
            'id', 'first_name', 'last_name', 'middle_int', 'email', 'password', 'phone', 'address', 'created_at', 'updated_at'
        ]
    validate_password = make_password


class CategorySerializer(ModelSerializer):

    class Meta:
        model = Category
        fields = [
            'id', 'name'
        ]


class ProductSerializer(ModelSerializer):

    class Meta:
        model = Product

        fields = [
            'id', 'name', 'price', 'quantity', 'description', "category", 'photo', 'phot02', 'photo3'
        ]

        depth = 1
