# Full Stack Django Application

### Prerequisites
What you'll need:

 * Working version of Python (this project uses v3.7.6) [downlaod here](https://www.python.org/downloads/)
 * *__OPTIONAL BUT GOOD PRACTICE__* Virtual environment (I use conda, [download here](https://docs.conda.io/projects/conda/en/latest/user-guide/install/download.html))
 * Working version of Django (this project uses v3.0.2) 
   - Install by running `python -m pip install Django` (inside your venv if configured)
 * Some time on your hands

### Getting Started
To use this project and get started just run
```
git clone https://github.com/s6eskand/learn-with-me intro-django-application
```
or
```
git clone https://github.com/s6eskand/learn-with-me
```
if you want the entire repository on your local machine.

Once the repository is set up, run `python manage.py makemigrations` followed by `python manage.py migrate` (`py manage.py makemigrations` and `python manage.py makemigrations` if on Windows)

When all migrations are applied and your Models are configured, run `python manage.py runserver` (`py manage.py runserver` if on Windows) and play around with the code and website as your heart desires :)
