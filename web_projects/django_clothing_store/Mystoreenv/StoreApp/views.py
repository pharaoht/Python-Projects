from rest_framework import status
from rest_framework.response import Response
from .models import User
from .models import Address
from .serializers import UserSerializer
from rest_framework.decorators import api_view


@api_view(['GET', ])
def user_detail_view(request):
    try:
        client_user = User.objects.all()
    except User.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    serializer = UserSerializer(client_user)
    return Response(serializer.data)


@api_view(['POST'])
def create_new_user(request):
    User.objects.create(
        first_name=request.POST['fname'],
        last_name=request.POST['lname'],
        middle_int=request.POST['midint'],
        email=request.POST['email'],
        password=request.POST['password'],
        phone=request.POST['phone'],
        photo=request.POST['photo'],
        address=request.POST['address']
    )
    return Response("hi")
