from django.db import models
from django.forms import ModelForm


# Create your models here.
class Book(models.Model):
    title = models.CharField(max_length=200)  # title of book
    author = models.CharField(max_length=100)  # author of book
    description = models.TextField(max_length=1000)  # user description
    image = models.TextField(max_length=5000)  # image as string
    rating = models.FloatField(default=1)  # user rating


# Class BookForm inherits from Django ModelForm
class BookForm(ModelForm):
    class Meta:
        # Specifies the related model
        model = Book
        # Specifies the fields to include
        # If you do not want all you can create a list of the required fields instead
        fields = '__all__'


'''
Max Length for image set very large since base64 encoded images can become quite large
'''
