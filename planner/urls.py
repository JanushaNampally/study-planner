from django.urls import path 
from .views import home, dashboard

urlpatterns = [
    path("", home, name="planner_home"),
    path("dashboard/", dashboard, name="dashboard"),
]