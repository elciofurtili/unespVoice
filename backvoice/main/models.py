from django.db import models

class User(models.Model):
    name = models.CharField(max_length=255)
    email = models.EmailField()
    password = models.CharField(max_length=255)
    birthdate = models.DateField()
    description = models.CharField(max_length=200)

class Project(models.Model):
    title = models.CharField(max_length=255)
    resume = models.CharField(max_length=255)
    article = models.TextField()

class Org(models.Model):
    name = models.CharField(max_length=255)
    email = models.EmailField()
    website = models.CharField(max_length=255)