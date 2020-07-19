from django.shortcuts import render

from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser 
from rest_framework import status
 
from backend.models import Backend
from backend.serializers import BackendSerializer
from rest_framework.decorators import api_view


@api_view(['GET', 'POST', 'DELETE'])
def backend_list(request):
    if request.method == 'GET':
        backend = Backend.objects.all()
        
        title = request.GET.get('title', None)
        if title is not None:
            backend = backend.filter(title__icontains=title)
        
        backend_serializer = BackendSerializer(backend, many=True)
        return JsonResponse(backend_serializer.data, safe=False)
        # 'safe=False' for objects serialization

    elif request.method == 'POST':
        backend_data = JSONParser().parse(request)
        backend_serializer = BackendSerializer(data=backend_data)
        if backend_serializer.is_valid():
            backend_serializer.save()
            return JsonResponse(backend_serializer.data, status=status.HTTP_201_CREATED) 
        return JsonResponse(backend_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'PUT', 'DELETE'])
def backend_detail(request, pk):
    try: 
        backend = Backend.objects.get(pk=pk) 
    except Backend.DoesNotExist: 
        return JsonResponse({'message': 'The item does not exist'}, status=status.HTTP_404_NOT_FOUND) 
 
    if request.method == 'GET': 
        backend_serializer = BackendSerializer(backend) 
        return JsonResponse(backend_serializer.data)

    elif request.method == 'PUT': 
        backend_data = JSONParser().parse(request) 
        backend_serializer = BackendSerializer(backend, data=backend_data) 
        if backend_serializer.is_valid(): 
            backend_serializer.save() 
            return JsonResponse(backend_serializer.data) 
        return JsonResponse(backend_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        count = Tutorial.objects.all().delete()
        return JsonResponse({'message': '{} Tutorials were deleted successfully!'.format(count[0])}, status=status.HTTP_204_NO_CONTENT)       