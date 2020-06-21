from django.shortcuts import render
from .models import Book, BookForm


# Create your views here.
def index(request):
    return render(request, 'index.html')


# books view
def books(request):
    # get all books from database
    all_books = Book.objects.all()

    # create object to export list of all Book objects
    frontend_exports = {
        'books': all_books
    }

    return render(request, 'books.html', frontend_exports)


# form view
def add_book(request):

    # Create instance of BookForm
    form_data = BookForm(request.POST)

    # Check if submission is valid
    if form_data.is_valid():
        # Save BookForm object as Book object
        new_book = form_data.save()
        # Save Book object
        new_book.save()

    return render(request, 'form.html')
