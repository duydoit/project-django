# Generated by Django 3.2.9 on 2021-12-07 18:14

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('hr', '0009_alter_employee_birth_day'),
    ]

    operations = [
        migrations.AlterField(
            model_name='employee',
            name='department',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='hr.department'),
        ),
        migrations.AlterField(
            model_name='employee',
            name='email',
            field=models.EmailField(blank=True, max_length=254, null=True),
        ),
    ]
