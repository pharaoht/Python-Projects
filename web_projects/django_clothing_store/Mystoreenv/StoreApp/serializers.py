# Django rest framework uses serializers to handle data between JSON oe XML and native Python objects
# package data when its coming to the server and unpackage data when its coming from the server
from rest_framework.serializers import ModelSerializer
from .models import User

# Model serializer, less customizable but more simple to setup


class UserSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = [
            'id', 'first_name', 'last_name', 'middle_int', 'email', 'password', 'phone', 'photo', 'address', 'created_at', 'updated_at'
        ]
