from django.conf.urls import url 
from backend import views 
 
urlpatterns = [ 
    url(r'^api/backend$', views.backend_list),
    url(r'^api/backend/(?P<pk>[0-9]+)$', views.backend_detail),
]