# Django rest framework uses serializers to handle data between JSON oe XML and native Python objects
# package data when its coming to the server and unpackage data when its coming from the server
from rest_framework.serializers import ModelSerializer
from rest_framework import serializers
# from .models import User
from .models import Product, Category, NewUser, Gender, Size, Quantity
from django.contrib.auth.hashers import make_password
from django.db import models
from rest_framework.validators import UniqueValidator

# Model serializer, less customizable but more simple to setup


class UserSerializer(ModelSerializer):
    class Meta:
        model = NewUser
        fields = ('first_name', 'email', 'password')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        passowrd = validated_data.pop('password', None)
        instance = self.Meta.model(**validated_data)
        if passowrd is not None:
            instance.set_password(passowrd)
        instance.save()
        return instance


class LoginUserSerializer(ModelSerializer):
    class Meta:
        model = NewUser
        fields = ['id', 'email', 'first_name', "last_name", 'phone_number']


class CategorySerializer(ModelSerializer):

    class Meta:
        model = Category
        fields = [
            'id', 'name'
        ]


class GenderSerializer(ModelSerializer):

    class Meta:
        model = Gender
        fields = [
            'id', 'name'
        ]


class ProductSerializer(ModelSerializer):

    class Meta:
        model = Product

        fields = [
            'id', 'name', 'price', 'quantity', 'description', "category", 'photo1', 'photo2', 'photo3', 'gender', 'is_onSale'
        ]

        depth = 1


class SizeSerializer(ModelSerializer):
    class Meta:
        model = Size
        fields = [
            'id', 'name'
        ]


class QuantitySerializer(ModelSerializer):
    class Meta:
        model = Quantity
        fields = [
            'id', 'name'
        ]


class RegistrationSerializer(ModelSerializer):
    password2 = serializers.CharField(
        style={'input_type': 'password'}, write_only=True)

    class Meta:
        model = NewUser
        fields = ['email', 'first_name', 'last_name', 'password', 'password2']
        extra_kwargs = {'password': {'write_only': True}}

    def save(self):
        user = NewUser(
            email=self.validated_data['email'], first_name=self.validated_data['first_name'], last_name=self.validated_data['last_name'])
        password = self.validated_data['password']
        password2 = self.validated_data['password2']

        if password != password2:
            raise serializers.ValidationError(
                {'password': 'Passwords must match'})

        user.set_password(password)
        user.save()
        return user
