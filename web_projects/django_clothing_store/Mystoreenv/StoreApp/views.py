from rest_framework import status
from rest_framework.response import Response
from .models import User
from .models import Address
from .models import Product
from .models import Category
from .serializers import UserSerializer
from .serializers import ProductSerializer
from .serializers import CategorySerializer
from rest_framework.decorators import api_view


@api_view(['GET', ])
def all_users(request):
    try:
        client_user = User.objects.all()
    except User.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    serializer = UserSerializer(client_user, many=True)
    return Response(serializer.data)


@api_view(['POST', ])
def create_new_user(request):

    if request.method == "POST":
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST', ])
def add_new_product(request):
    cate = Categories.objects.get(id=request.data['category'])

    if request.method == "POST":
        serializer2 = ProductSerializer(data=request.data)
        if serializer2.is_valid():
            new_product = Product.objects.create(
                category=cate, name=request.data['name'], price=request.data['price'], quantity=request.data['quantity'],
                description=request.data['description'])
            new_product.save()
            serializer = ProductSerializer(new_product)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
def add_new_category(request):
    if request.method == "POST":
        serializer = CategorySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def get_all_products(request):
    pass


@api_view(['GET'])
def get_all_shirts(request):
    pass
