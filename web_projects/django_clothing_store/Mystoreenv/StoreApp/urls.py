# from django.urls import path
# from . import views
from .views import ProductList
from rest_framework.routers import DefaultRouter

app_name = 'StoreApp'

router = DefaultRouter()
router.register('', ProductList, basename='product')
urlpatterns = router.urls

# urlpatterns = [
#     path('all-users/', views.all_users, name="all_users"),
#     path('add-new-product/', views.add_new_product),
#     path('add-new-category/', views.add_new_category),
#     path('get-all-products/', views.get_all_products),
#     path('get-all-t-shirts/', views.get_all_shirts),
#     path('get-all-categories/', views.get_all_categories),
#     path('register/', views.CustomUserCreate.as_view(), name="create_user"),
#     path('get-all-male-products/', views.GetAllMaleProducts.as_view())

# ]
