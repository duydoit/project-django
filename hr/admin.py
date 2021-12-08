from django.contrib import admin
from .models import *
# Register your models here.
class EmployeeAdmin(admin.ModelAdmin):
    list_display = ('name','email','department','manager','action')

class DepartmentAdmin(admin.ModelAdmin):
    list_display = ('id','name')

class ManagerDepartmentAdmin(admin.ModelAdmin):
    list_field = ('department','manager')
    list_display = ('department','manager')

admin.site.register(Employee,EmployeeAdmin)
admin.site.register(Department,DepartmentAdmin)
admin.site.register(EmployeeCategory)
admin.site.register(ManagerDepartment,ManagerDepartmentAdmin)