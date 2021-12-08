from rest_framework.response import Response
from rest_framework.decorators import api_view
from hr.models.employee import Employee
import json
from .serialization import EmployeeSerializer
# Create your views here.

@api_view(['GET','POST'])
def query_test(request):
    if request.method == 'GET':
        emp = Employee.objects.get(id=1)
        emp_sz = EmployeeSerializer(emp, many = False)
        print(emp_sz.data)
        return Response(emp_sz.data) 

    elif request.method == 'POST':
        emp_sz = EmployeeSerializer(data=request.data)
        if emp_sz.is_valid():
            emp_sz.save()
        return Response(emp_sz.data) 


