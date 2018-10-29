from django.urls import path
from .views import *
from django.conf import settings
from django.conf.urls.static import static
 

urlpatterns = [
    path('', home, name="home"),
    path('galeria/', galeria, name="galeria"),
    path('formulario/', formulario, name="formulario"),
]
