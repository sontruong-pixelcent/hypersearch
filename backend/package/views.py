from .models import Package
from recommenders.models import improved_recommendations_2
from django.http import JsonResponse
from django.core import serializers


def detail(request, id):
    try:
        # item = {"item": [Package.objects.get(pk=id),][0]}
        item = Package.objects.get(index=id)
        readme_relevant_ids = improved_recommendations_2(id, 'readme')
        name_des_relevant_ids = improved_recommendations_2(id, 'name_des')
        readme_relevant_packages = Package.objects.filter(index__in=readme_relevant_ids)
        name_des_relevantpackages = Package.objects.filter(index__in=name_des_relevant_ids)
        return JsonResponse({
            "item": serializers.serialize("json", [item,]),
            "readme_relevant_packages": serializers.serialize("json", readme_relevant_packages),
            "name_des_relevantpackages": serializers.serialize("json", name_des_relevantpackages)
        })
    except Exception as e:
        print(e)
        return JsonResponse({"message": "some error occur"})
