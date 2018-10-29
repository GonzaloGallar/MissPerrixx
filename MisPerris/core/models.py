from django.db import models
from django import forms
from django.contrib.auth.models import Group

# Create your models here.



class Usuario(models.Model):
    usuario = models.CharField(max_length=25)
    clave = models.CharField(max_length=25)
    pregunta_secreta = models.CharField(max_length=100)
    respuesta_secreta = models.CharField(max_length=50)
    
    def __str__(self):
        return self.usuario

class Region(models.Model):
    nombre = models.CharField(max_length=50)
    
    def __str__(self):
        return self.nombre
    


class Comuna(models.Model):
    nombre = models.CharField(max_length=50)
    
  
    def __str__(self):
        return self.nombre


class TipoVivenda(models.Model):
    nombre = models.CharField( max_length=50)
    def __str__(self):
        return self.nombre

class Adoptante(models.Model):
    rut = models.CharField(max_length=11)
    email = models.EmailField( max_length=254)
    nombreCompleto = models.CharField(max_length=150)
    fechaNacimiento = models.DateField(auto_now=False, auto_now_add=False)
    telefono = models.IntegerField()
    region = models.ForeignKey(Region,on_delete=models.CASCADE)
    comuna = models.ForeignKey(Comuna,on_delete=models.CASCADE)
    tipoVivienda = models.ForeignKey(TipoVivenda,on_delete=models.CASCADE)
    

    def __str__(self):
        return self.nombreCompleto


class Raza(models.Model):
    nombre = models.CharField( max_length=50)
    def __str__(self):
        return self.nombre

class Estado(models.Model):
    nombre = models.CharField( max_length=50)
    def __str__(self):
        return self.nombre



class Mascota(models.Model):
    nombre = models.CharField(max_length=50)
    raza = models.ForeignKey(Raza, on_delete=models.CASCADE)
    descripcion = models.CharField(max_length=200)
    foto = models.ImageField(upload_to='img/')
    estado = models.ForeignKey(Estado, on_delete=models.CASCADE)

    def __str__(self):
        return self.nombre

   
class Adopciones (models.Model):
    Adoptante=models.ForeignKey(Adoptante,null=False,blank=False, on_delete=models.CASCADE)
    Mascota=models.ForeignKey(Mascota,null=False,blank=False, on_delete=models.CASCADE)
    FechaAdopcion=models.DateTimeField(auto_now_add=True)

    def __str__(self):
        cadena="{0}=>{1}"
        return cadena.format(self.Adoptante,self.Mascota)



