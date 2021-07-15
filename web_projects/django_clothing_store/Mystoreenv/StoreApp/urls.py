from django.urls import path
from . import views

app_name = 'StoreApp'


urlpatterns = [
    path('add-new-product/', views.add_new_product),
    path('add-new-category/', views.add_new_category),
    path('get-all-male-products/', views.get_all_products_male),
    path('get-all-female-products/', views.get_all_products_female),
    path('get-all-male-shirt/', views.get_all_shirts_male),
    path('get-all-categories/', views.get_all_categories),
    path('register/', views.CustomUserCreate.as_view(), name="create_user"),

]
