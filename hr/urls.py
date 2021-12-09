from django.urls import path
from .views import *

urlpatterns = [
    path('query/', ApiEmployee.as_view()),path('query/', ApiEmployee.as_view()),
    path('query-detail/<str:pk>', EmployeeDetail.as_view()),
]
