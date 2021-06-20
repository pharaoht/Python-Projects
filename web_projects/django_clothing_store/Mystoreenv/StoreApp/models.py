from django.db import models


class Address(models.Model):
    address_line_1 = models.CharField(max_length=100)
    address_line_2 = models.CharField(max_length=100)
    city = models.CharField(max_length=100)
    state = models.CharField(max_length=100)
    zipcode = models.CharField(max_length=5)
    country = models.CharField(
        default='United States', editable=False, max_length=13)


class User(models.Model):
    # ID is added by default in Django
    # Add validator to not allow special characters
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    middle_int = models.CharField(max_length=1, null=True)
    email = models.EmailField(max_length=254, unique=True)
    password = models.CharField(max_length=30)
    phone = models.CharField(max_length=10, null=True)
    photo = models.ImageField(upload_to='uploads/', null=True, blank=True)
    address = models.ForeignKey(Address, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


class UserManager(models.Manager):
    pass


class AddressManager(models.Model):
    pass
