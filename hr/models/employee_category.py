from django.db import models


class EmployeeCategory(models.Model):
    _name = 'hr.employee.category'

    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name
