# Generated by Django 3.2.9 on 2021-11-23 08:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('hr', '0002_rename_departmen_employee_department'),
    ]

    operations = [
        migrations.AlterField(
            model_name='employee',
            name='categorys',
            field=models.ManyToManyField(blank=True, null=True, to='hr.EmployeeCategory'),
        ),
    ]