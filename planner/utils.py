from pulp import LpMaximize, LpProblem, LpVariable
from .models import Subject 

def optimize_study_schedule(user):
    subjects = Subject.objects.filter(user=user)
    prob = LpProblem("StudyScheduler", LpMaximize)
    
    x = {subject.id: LpVariable(f"x_{subject.id}", lowbound=0) for subject in subjects}
    prob += sum(subject.priority * x[subject.id] for subject in subjects)
    
    total_available_time = 6 
    prob += sum(x[subject.id] for subject in subjects) <= total_available_time
    
    prob.solve()
    
    schedule = {}
    for subject in subjects:
        schedule[subject.name] = x[subject.id].varValue 
        
    return schedule