from django.contrib import admin
from .models import NewUser, Category, Product, Gender, Size, Quantity
# Register your models here.
admin.site.register(NewUser)
admin.site.register(Category)
admin.site.register(Product)
admin.site.register(Gender)
admin.site.register(Size)
admin.site.register(Quantity)
