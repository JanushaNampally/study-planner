from django.db import models

# Create your models here.
from django.contrib.auth.models import User 

class Subject(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    priority = models.IntegerField(default=1)
    deadline = models.DataField()
    estimated_hours = models.FLoatField()
    
class StudySchedule(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    Subject = models.ForeignKey(Subject, on_delete=models.CASCADE)
    allocated_hours = models.FloatField()
    study_date = models.DataField() 
    