from django.db import models

# Create your models here.


class Member(models.Model):
    name = models.CharField(max_length=100)
    surname = models.CharField(max_length=100)
    phone = models.CharField(max_length=100)
    email = models.EmailField(max_length=254)
    address = models.CharField(max_length=100)
    photo = models.ImageField(upload_to='members_profile',
                              height_field=None, width_field=None, max_length=None)

    def __str__(self):
        return self.name + " " + self.surname
