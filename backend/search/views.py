from django.http import JsonResponse


def index(request):
    return JsonResponse({'packages': [{'id': 'package id', 'name': 'package name'}]})
