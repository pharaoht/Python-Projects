from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager


class Address(models.Model):
    address_line_1 = models.CharField(max_length=100)
    address_line_2 = models.CharField(max_length=100)
    city = models.CharField(max_length=100)
    state = models.CharField(max_length=100)
    zipcode = models.CharField(max_length=5)
    country = models.CharField(
        default='United States', editable=False, max_length=13)


class UserManager(BaseUserManager):

    def create_user(self, email, user_name, first_name, last_name, **other_fields):
        email = self.normalize_email(email)
        user = self.model(email=email, user_name=user_name,
                          first_name=first_name, last_name=last_name, **other_fields)
        return user

    def create_superuser(self, email, user_name, first_name, last_name, password, **other_fields):
        other_fields.setdefault('is_staff', True)
        if other_fields.get('is_staff') is not True:
            raise ValueError('Admin user must be set to is_staff')
        return self.create_user(email, user_name, first_name, password, last_name, **other_fields)


class NewUser(AbstractBaseUser):
    email = models.EmailField(unique=True)
    user_name = models.CharField(max_length=150, unique=True)
    first_name = models.CharField(max_length=150)
    last_name = models.CharField(max_length=150)
    # address = models.ForeignKey(
    #     Address, related_name='address', on_delete=models.CASCADE, null=True)
    is_staff = models.BooleanField(default=False)

    objects = UserManager()

    USERNAME_FIELD = 'user_name'


class Category(models.Model):
    name = models.CharField(max_length=255, db_index=True, unique=True)
    slug = models.SlugField(max_length=255, unique=True)

    class Meta:
        verbose_name_plural = 'categories'

    def __unicode__(self):
        return self.name


class Product(models.Model):
    category = models.ForeignKey(
        Category, related_name='category', on_delete=models.PROTECT, null=True)
    name = models.CharField(max_length=50, unique=True)
    price = models.DecimalField(max_digits=6, decimal_places=2)
    quantity = models.IntegerField()
    photo1 = models.ImageField(upload_to='media/', blank=True)
    photo2 = models.ImageField(upload_to='media/', blank=True)
    photo3 = models.ImageField(upload_to='media/', blank=True)
    description = models.TextField()
    in_stock = models.BooleanField(default=True)

    def __unicode__(self):
        return self.name
