from django.core import serializers
from django.http import JsonResponse
from django.contrib.postgres.search import SearchQuery, SearchVector, SearchRank
from package.models import Package


def index(request):
    query = request.GET.get("q", "")

    search_rank = SearchRank(SearchVector(
        "fullname", "gh_readme", "author", "description"), SearchQuery(query))

    results = serializers.serialize("json", Package.objects.annotate(
        rank=search_rank
    ).order_by("-rank")[:5])

    return JsonResponse({'packages': results})
