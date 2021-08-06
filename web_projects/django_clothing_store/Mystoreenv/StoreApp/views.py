from rest_framework import status, generics
from rest_framework.response import Response
from .models import NewUser, Category, Product, Gender, Size, Quantity
from .serializers import UserSerializer, ProductSerializer, CategorySerializer, GenderSerializer, SizeSerializer, QuantitySerializer, RegistrationSerializer, LoginUserSerializer
from rest_framework.decorators import api_view
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny, IsAuthenticatedOrReadOnly
from rest_framework import viewsets
from django.shortcuts import get_object_or_404
from rest_framework.pagination import PageNumberPagination
from rest_framework_simplejwt.tokens import RefreshToken


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
    for key in request.session.keys():
        print(request.session[key])
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


@api_view(['GET'])
def get_quantity(reqest):
    try:
        quantities = Quantity.objects.all()
    except quantities.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    serializer = QuantitySerializer(quantities, many=True)
    return Response(serializer.data)


@api_view(['POST'])
def registration_view(request):

    if request.method == 'POST':
        serializer = RegistrationSerializer(data=request.data)
        data = {}
        if serializer.is_valid():
            user = serializer.save()
            data['user'] = request.session['loggedInUser'] = user.id
            data['first_name'] = user.first_name
            data['email'] = user.email
            data['last_name'] = user.last_name
        else:
            return Response(status=status.HTTP_400_BAD_REQUEST, data=serializer.errors)
        return Response(status=status.HTTP_201_CREATED, data=data)


@api_view(['POST'])
def login_view(request):

    try:
        user = NewUser.objects.filter(email=request.data['email'])
        serializer = LoginUserSerializer(user, many=True)
    except:
        return Response(status=status.HTTP_400_BAD_REQUEST, data=serializer.errors)
    return Response(status=status.HTTP_200_OK, data=serializer.data)


@api_view(['POST'])
def wish_list(request):

    pass

# Response(data, status=None, template_name=None, headers=None, content_type=None)


class CustomUserCreate(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        print(request.data['email'])
        reg_serializer = UserSerializer(data=request.data)

        if reg_serializer.is_valid():
            newuser = reg_serializer.save()
            if newuser:
                return Response(status=status.HTTP_201_CREATED,)
        print(reg_serializer.errors)
        return Response(status=status.HTTP_400_BAD_REQUEST, data=reg_serializer.errors)


class BlacklistTokenView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        try:
            refresh_token = request.data['refresh_token']
            token = RefreshToken(refresh_token)
            token.blacklist()
        except Exception as e:
            return Response(status=status.HTTP_400_BAD_REQUEST)
        return Response(status=status.HTTP_201_CREATED)


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
