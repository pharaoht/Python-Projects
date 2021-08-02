from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import NewUser, Category, Product, Gender, Size, Quantity
# Register your models here.
admin.site.register(NewUser)


class UserAdminConfig(UserAdmin):
    model = NewUser
    search_fields = ('email', 'first_name', 'last_name', 'phone_number',)
    list_filter = ('email', 'first_name', 'last_name', 'phone_number',)
    list_display = ('id', 'email', 'first_name', 'last_name',
                    'phone_number', 'is_staff')


admin.site.register(Category)
admin.site.register(Product)
admin.site.register(Gender)
admin.site.register(Size)
admin.site.register(Quantity)
