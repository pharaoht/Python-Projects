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
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    middle_int = models.CharField(max_length=1, null=True)
    email = models.EmailField(max_length=254, unique=True)
    password = models.CharField(max_length=30)
    phone = models.CharField(max_length=10, null=True)
    # photo = models.ImageField(upload_to='uploads/', null=True)
    address = models.ForeignKey(Address, on_delete=models.CASCADE, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    # add is admin field
    # Add validator to not allow special characters


class Category(models.Model):
    name = models.CharField(max_length=100, unique=True)

    def __unicode__(self):
        return self.name


class Product(models.Model):
    name = models.CharField(max_length=50)
    price = models.DecimalField(max_digits=6, decimal_places=2)
    quantity = models.IntegerField()
    photo = models.ImageField(upload_to='products/', blank=True)
    phot2 = models.ImageField(upload_to='products/', blank=True)
    photo3 = models.ImageField(upload_to='products/', blank=True)
    description = models.TextField()
    category = models.ForeignKey(
        Category, related_name='category', on_delete=models.SET_NULL, null=True)

    def __unicode__(self):
        return self.name


class Order(models.Model):
    pass


class UserManager(models.Manager):
    pass


class AddressManager(models.Model):
    pass
