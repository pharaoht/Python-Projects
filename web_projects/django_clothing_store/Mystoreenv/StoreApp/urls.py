from django.urls import path
from . import views

app_name = 'StoreApp'

urlpatterns = [
    path('create-new-user/', views.user_detail_view, name="create_user")
]
