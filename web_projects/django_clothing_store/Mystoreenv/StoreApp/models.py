from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin

from phone_field import PhoneField
from django.conf import settings

# class Address(models.Model):
#     address_line_1 = models.CharField(max_length=100)
#     address_line_2 = models.CharField(max_length=100)
#     city = models.CharField(max_length=100)
#     state = models.CharField(max_length=100)
#     zipcode = models.CharField(max_length=5)
#     country = models.CharField(
#         default='United States', editable=False, max_length=13)


class UserManager(BaseUserManager):

    def create_superuser(self, email, first_name, password, **other_fields):
        other_fields.setdefault('is_staff', True)
        print("hi")
        if other_fields.get('is_staff') is not True:
            raise ValueError('Admin user must be set to is_staff')
        return self.create_user(email,  first_name, password, is_superuser=True, ** other_fields)

    def create_user(self, email, first_name, last_name, **other_fields):

        email = self.normalize_email(email)
        user = self.model(email=email,
                          first_name=first_name, last_name=last_name, **other_fields)
        return user


class NewUser(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(unique=True)
    first_name = models.CharField(max_length=150)
    last_name = models.CharField(max_length=150)
    phone_number = PhoneField(blank=True, help_text='Contact phone number')
    # address = models.ForeignKey(
    #     Address, related_name='address', on_delete=models.CASCADE, null=True)
    is_staff = models.BooleanField(default=False)

    objects = UserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['first_name']

    def __str__(self):
        return self.first_name

    def has_perm(self, perm, obj=None):
        return self.is_staff


class Category(models.Model):
    name = models.CharField(max_length=255, db_index=True, unique=True)
    slug = models.SlugField(max_length=255, unique=True)

    class Meta:
        verbose_name_plural = 'categories'

    def __str__(self):
        return self.name


class Gender(models.Model):
    name = models.CharField(max_length=6, db_index=True, unique=True)

    def __str__(self):
        return self.name


class Size(models.Model):
    name = models.CharField(max_length=50, db_index=True, unique=True)

    def __str__(self):
        return self.name


class Quantity(models.Model):
    name = models.CharField(max_length=50, db_index=True, unique=True)

    def __str__(self):
        return self.name


class Product(models.Model):
    category = models.ForeignKey(
        Category, related_name='category', on_delete=models.PROTECT, null=True)
    gender = models.ForeignKey(
        Gender, related_name='gender', on_delete=models.PROTECT, null=True)
    name = models.CharField(max_length=50, unique=True)
    price = models.DecimalField(max_digits=6, decimal_places=2)
    quantity = models.IntegerField()
    photo1 = models.ImageField(upload_to='media/', blank=True)
    photo2 = models.ImageField(upload_to='media/', blank=True)
    photo3 = models.ImageField(upload_to='media/', blank=True)
    description = models.TextField()
    is_onSale = models.BooleanField(default=False)
    objects = models.Manager()

    def __str__(self):
        return self.name


# class WishList(models.Model):
#     user = models.ForeignKey(
#         NewUser, related_name="user", on_delete=models.PROTECT)
#     # product = models.ForeignKey(
#     #     Product, related_name="productWish", on_delete=models.PROTECT)

#     def __str__(self):
#         return self.user + self.product
