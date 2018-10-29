from django.shortcuts import render, redirect
from .models import *
from django.contrib import messages
from django.contrib.auth.decorators import login_required
from django.conf import settings

# Create your views here.

def home(request):
    perros = Mascota.objects.filter(estado=3)
    return render(request, 'core/home.html', 
    {
    'adoptada':perros
    })

def galeria(request):
    perros = Mascota.objects.filter(estado=1)
    return render(request, 'core/galeria.html', 
    {
    'disponible':perros
    })    

def formulario(request): 
    region = Region.objects.all()
    comuna = Comuna.objects.all()
    tipovivienda=TipoVivenda.objects.all()
    variables={
        'region':region,
        'comuna':comuna,
        'tipovivienda':tipovivienda,
    }
    if request.POST:
        adoptante=Adoptante()
        adoptante.rut=request.POST.get('txtRun')
        adoptante.email=request.POST.get('txtMail')
        adoptante.nombreCompleto=request.POST.get('txtNombre')
        adoptante.fechaNacimiento=request.POST.get('txtNacimiento')
        adoptante.telefono=request.POST.get('txtFono')
        region=Region()
        adoptante.region=request.POST.get('cboRegiones')
        comuna=Comuna()
        adoptante.comuna=request.POST.get('cboComuna')
        tipovivienda=TipoVivenda()
        adoptante.tipoVivienda=request.POST.get('txtVivienda')

        try:
            adoptante.save()         
            variables['mensaje'] = "Guardado correctamente"
        except:
            variables['mensaje'] = "No se ha podido guardar"

    return render(request, 'core/formulario.html', variables)

# @login_required





