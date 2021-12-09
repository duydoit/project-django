from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import (status,generics,mixins)

from hr.models.employee import Employee
from .serialization import EmployeeSerializer

# Create your views here.

class ApiEmployee(generics.GenericAPIView, mixins.ListModelMixin, mixins.CreateModelMixin):
    serializer_class = EmployeeSerializer
    queryset = Employee.objects.all()
    def get(self, request):
        return self.list(request)
    def post(self, request):
        return self.create(request)
    
    
    # def post(self, request):
    #     serializer = EmployeeSerializer(data=request.data)
    #     if serializer.is_valid():
    #         serializer.save()
    #         return Response(serializer.data, status = status.HTTP_201_CREATED)
    #     return(status.HTTP_400_BAD_REQUEST)

class EmployeeDetail(APIView):

    def get(self, request, pk):
        employee = Employee.objects.get(id=pk)
        serializer = EmployeeSerializer(employee)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def put(self, request, pk):
        employee = Employee.objects.get(id=pk)
        serializer = EmployeeSerializer(employee, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status = status.HTTP_202_ACCEPTED)
        return Response(serializer.data, status = status.HTTP_400_BAD_REQUEST)
    
    def delete(self, request, pk):
        employee = Employee.objects.get(id=pk)
        employee.delete()
        return Response(status = status.HTTP_204_NO_CONTENT)