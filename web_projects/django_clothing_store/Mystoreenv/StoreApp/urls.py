from django.urls import path
from . import views

app_name = 'StoreApp'


urlpatterns = [
    path('add-new-product/', views.add_new_product),
    path('add-new-category/', views.add_new_category),
    path('get-all-male-products/', views.get_all_products_male),
    path('get-all-female-products/', views.get_all_products_female),
    path('get-all-categories/', views.get_all_categories),
    path('filter/<int:catid>/<int:gendid>/', views.filter_cate),
    path('get-product/<int:prodid>/', views.get_one_item),
    path('get-sizes/', views.get_sizes),
    path('get-quantities/', views.get_quantity),
    path('register-user/', views.registration_view, name="create_user"),

]
