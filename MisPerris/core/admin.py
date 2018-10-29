from django.contrib import admin
from .models import *

# Register your models here.


class RegionAdmin(admin.ModelAdmin):
    list_display = ('id','nombre')

class ComunaAdmin(admin.ModelAdmin):
    list_display = ('id','nombre')

class RazaAdmin(admin.ModelAdmin):
    list_display = ('id','nombre')

class EstadoAdmin(admin.ModelAdmin):
    list_display = ('id','nombre')

class MascotaAdmin(admin.ModelAdmin):
    list_display = ('id','nombre','raza','descripcion','foto','estado')

class TipoViviedaAdmin(admin.ModelAdmin):
    list_display = ('id','nombre')

class AdoptanteAdmin(admin.ModelAdmin):
    list_display = ('id','rut','email','nombreCompleto','fechaNacimiento','telefono','region','comuna','tipoVivienda')

admin.site.register(Region,RegionAdmin)
admin.site.register(Comuna,ComunaAdmin)
admin.site.register(Estado,EstadoAdmin)
admin.site.register(Raza,RazaAdmin)
admin.site.register(Mascota, MascotaAdmin)
admin.site.register(TipoVivenda,TipoViviedaAdmin)
admin.site.register(Adoptante,AdoptanteAdmin)
admin.site.register(Adopciones)

