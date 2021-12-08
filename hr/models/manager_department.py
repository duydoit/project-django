from django.db import models
from hr.models.department import Department
from hr.models.employee import Employee

class ManagerDepartment(models.Model):
    
    manager = models.ForeignKey(Employee,on_delete=models.CASCADE)
    department = models.OneToOneField(Department,on_delete=models.CASCADE)
