# Django rest framework uses serializers to handle data between JSON oe XML and native Python objects
from rest_framework.serializers import ModelSerializer
from .models import User


class UserSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = (
            'id', 'first_name', 'last_name', 'middle_int', 'email', 'password', 'phone', 'photo', 'address', 'created_at', 'updated_at'
        )
