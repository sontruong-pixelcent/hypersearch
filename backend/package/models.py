from django.db import models


class Package(models.Model):
    index = models.IntegerField(default=0)
    fullname = models.CharField(max_length=70, default='')
    name = models.CharField(max_length=62)
    description = models.CharField(max_length=277, null=True)
    gh_readme = models.TextField(null=True)
    author = models.CharField(max_length=24)
    stargazers_count = models.IntegerField()
    watchers_count = models.IntegerField()
    forks_count = models.IntegerField()
