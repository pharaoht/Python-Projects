from rest_framework import status, generics
from rest_framework.response import Response
from .models import NewUser, Category, Product
from .serializers import UserSerializer, ProductSerializer, CategorySerializer
from rest_framework.decorators import api_view
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny


class CustomUserCreate(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        reg_serializer = UserSerializer(data=request.data)
        if reg_serializer.is_valid():
            newuser = reg_serializer.save()
            if newuser:
                return Response(status=status.HTTP_201_CREATED)
        return Response(reg_serializer.errors, status=status.HTTP_400_BAD_REQUEST)


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
    print(request.data['category'])
    cate = Category.objects.get(id=request.data['category'])

    if request.method == "POST":
        serializer2 = ProductSerializer(data=request.data)
        if serializer2.is_valid():
            serializer2.save()
            return Response(serializer2.data, status=status.HTTP_201_CREATED)
    return Response(data=serializer2.errors, status=status.HTTP_400_BAD_REQUEST)


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
    try:
        products = Product.objects.all()
        print(products)
    except products.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data)

# going to make this route dynamic to find item based off what is click


@api_view(['GET'])
def get_all_shirts(request):
    try:
        shirts = Product.objects.filter(category_id=2)
    except shirts.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    serializer = ProductSerializer(shirts, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def get_all_categories(request):
    try:
        categories = Category.objects.all()
    except categories.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    serializer = CategorySerializer(categories, many=True)
    return Response(serializer.data)

#Response(data, status=None, template_name=None, headers=None, content_type=None)
