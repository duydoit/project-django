from rest_framework import serializers

from hr.models.employee import Employee

class EmployeeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employee
        fields = ['id','name','department']