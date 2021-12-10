from django.db import models
from hr.models.department import Department
from hr.models.employee_category import EmployeeCategory


class Employee(models.Model):
    _name = 'hr.employee'

    name = models.CharField(max_length=100)
    action = models.BooleanField(default=True)
    email = models.EmailField(max_length=254, blank=True, null=True)
    # phone = models.PhoneNumberField()
    GENDER_CHOICE = [('male', 'Male'),
                     ('female', 'Female'),
                     ('other', 'Other'), ]
    gander = models.CharField(
        max_length=6, choices=GENDER_CHOICE, default='male')
    birth_day = models.DateField(blank=True, null=True)
    MARITAL_CHOICE = [('single', 'Single'),
                      ('married', 'Married'),
                      ('cohabitant', 'Legal Cohabitant'),
                      ('widower', 'Widower'),
                      ('divorced', 'Divorced'), ]
    marital = models.CharField(
        max_length=15, choices=MARITAL_CHOICE, default='single')
    departure_date = models.DateTimeField(auto_now=True, auto_now_add=False)
    EMPLOYEE_TYPE_CHOICE = [('employee', 'Employee'),
                            ('student', 'Student'),
                            ('trainee', 'Trainee'),
                            ('contractor', 'Contractor'),
                            ('freelance', 'Freelancer'), ]
    employee_type = models.CharField(max_length=20, choices=EMPLOYEE_TYPE_CHOICE, default='employee')

    categorys = models.ManyToManyField(EmployeeCategory, blank=True, null=True)
    department = models.ForeignKey(Department, on_delete=models.CASCADE,blank=True, null=True)
    manager = models.ForeignKey(
        'self', null=True, blank=True, related_name='children', on_delete=models.CASCADE)
    
   
    def __str__(self):
        return self.name
    