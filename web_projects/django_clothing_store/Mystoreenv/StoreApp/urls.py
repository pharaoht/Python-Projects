from django.urls import path
from . import views

app_name = 'StoreApp'

urlpatterns = [
    path('all-users/', views.all_users, name="all_users"),
    path('add-new-product/', views.add_new_product),
    path('add-new-category/', views.add_new_category),
    path('get-all-products/', views.get_all_products),
    path('get-all-t-shirts/', views.get_all_shirts),
    path('get-all-categories/', views.get_all_categories),
    path('register/', views.CustomUserCreate.as_view(), name="create_user")
    #path('get-all-male-products/', AllMaleProducts.as_view())

]
