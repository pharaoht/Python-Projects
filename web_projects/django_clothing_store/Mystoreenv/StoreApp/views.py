from rest_framework import status, generics
from rest_framework.response import Response
from .models import NewUser, Category, Product, Gender, Size
from .serializers import UserSerializer, ProductSerializer, CategorySerializer, GenderSerializer, SizeSerializer
from rest_framework.decorators import api_view
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny, IsAuthenticatedOrReadOnly
from rest_framework import viewsets
from django.shortcuts import get_object_or_404
from rest_framework.pagination import PageNumberPagination


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
    genid = 1

    try:
        products = Product.objects.filter(gender=genid)
        paginator = PageNumberPagination()
        paginator.page_size = 16
    except products.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    result_page = paginator.paginate_queryset(products, request)
    serializer = ProductSerializer(result_page, many=True)
    return paginator.get_paginated_response(serializer.data)


@api_view(['GET'])
def get_all_products_female(request):
    genid = 2
    try:
        products = Product.objects.filter(gender=genid)
        paginator = PageNumberPagination()
        paginator.page_size = 16
    except products.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    result_page = paginator.paginate_queryset(products, request)
    serializer = ProductSerializer(result_page, many=True)
    return paginator.get_paginated_response(serializer.data)


# make this dynamic
@api_view(['GET'])
def filter_cate(request, catid, gendid):
    try:
        catefilt = Product.objects.filter(category=catid, gender=gendid)
    except catefilt.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    serializer = ProductSerializer(catefilt, many=True)
    return Response(serializer.data)


@ api_view(['GET'])
def get_all_categories(request):
    try:
        categories = Category.objects.all()
    except categories.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    serializer = CategorySerializer(categories, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def get_one_item(request, prodid):
    try:
        product = Product.objects.get(id=prodid)
    except product.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    serializer = ProductSerializer(product)
    return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(['GET'])
def get_sizes(reqest):
    try:
        sizes = Size.objects.all()
    except sizes.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    serializer = SizeSerializer(sizes, many=True)
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
