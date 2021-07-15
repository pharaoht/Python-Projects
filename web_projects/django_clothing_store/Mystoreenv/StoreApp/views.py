from rest_framework import status, generics
from rest_framework.response import Response
from .models import NewUser, Category, Product, Gender
from .serializers import UserSerializer, ProductSerializer, CategorySerializer, GenderSerializer
from rest_framework.decorators import api_view
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny, IsAuthenticatedOrReadOnly
from rest_framework import viewsets
from django.shortcuts import get_object_or_404


@ api_view(['POST', ])
def create_new_user(request):

    if request.method == "POST":
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@ api_view(['POST', ])
def add_new_product(request):
    print(request.data['category'])
    cate = Category.objects.get(id=request.data['category'])

    if request.method == "POST":
        serializer2 = ProductSerializer(data=request.data)
        if serializer2.is_valid():
            serializer2.save()
            return Response(serializer2.data, status=status.HTTP_201_CREATED)
    return Response(data=serializer2.errors, status=status.HTTP_400_BAD_REQUEST)


@ api_view(['POST'])
def add_new_category(request):
    if request.method == "POST":
        serializer = CategorySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@ api_view(['GET'])
def get_all_products_male(request):

    try:
        products = Product.objects.filter(gender=1)
        print(products)
    except products.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def get_all_products_female(request):
    try:
        products_female = Product.objects.filter(gender=2)
    except products_female.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    serializer = ProductSerializer(products_female, many=True)
    return Response(serializer.data)

# going to make this route dynamic to find item based off what is click


@ api_view(['GET'])
def get_all_shirts(request):
    try:
        shirts = Product.objects.filter(category_id=2)
    except shirts.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    serializer = ProductSerializer(shirts, many=True)
    return Response(serializer.data)


@ api_view(['GET'])
def get_all_categories(request):
    try:
        categories = Category.objects.all()
    except categories.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    serializer = CategorySerializer(categories, many=True)
    return Response(serializer.data)

# Response(data, status=None, template_name=None, headers=None, content_type=None)


class CustomUserCreate(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        reg_serializer = UserSerializer(data=request.data)
        print(request.data)
        if reg_serializer.is_valid():
            newuser = reg_serializer.save()
            if newuser:
                return Response(status=status.HTTP_201_CREATED)
        return Response(data=reg_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# class CreateProduct(APIView):
    #     permission_classes = [AllowAny]

    #     def post(self, request):
    #         reg_serializer = ProductSerializer(data=request.data)
    #         print(reg_serializer)
    #         if reg_serializer.is_valid():
    #             newproduct = reg_serializer.save()
    #             if newproduct:
    #                 return Response(status=status.HTTP_201_CREATED)
    #        return Response(data=reg_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# class ProductList(viewsets.ViewSet):
    # permission_classes = [IsAuthenticatedOrReadOnly]
    # queryset = Product.objects.filter()

    # def list(self, request):
    #     serializer_class = ProductSerializer(self.queryset, many=True)
    #     return Response(serializer_class.data)

    # def retrieve(self, request, pk=None):
    #     product = get_object_or_404(self.queryset, pk=pk)
    #     serializer_class = ProductSerializer(product)
    #     return Response(serializer_class.data)
