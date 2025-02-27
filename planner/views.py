from django.shortcuts import render

# Create your views here.
from .models import Subject, StudySchedule
from .utils import optimize_study_schedule 

def home(request):
    return render(request, "home.html")
def dashboard(request):
    schedule = optimize_study_schedule(request.user)
    return render(request, "dashboard.html", {"schedule": schedule})