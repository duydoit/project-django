from django.db import models


class Department(models.Model):
    _name = 'hr.department'

    name = models.CharField(max_length=50)
    complete_name = models.CharField(max_length=150, blank=True)
    active = models.BooleanField(default=True)

    parent = models.ForeignKey(
        'self', blank=True, null=True, related_name='children', on_delete=models.CASCADE)
    # manager = models.ForeignKey(Employee, on_delete=models.CASCADE)
    def __str__(self):
        return self.name
    
