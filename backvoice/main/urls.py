from django.urls import path
from . import views

urlpatterns = [
    path('api/users/', views.UserViewSet.as_view({'get': 'list', 'post': 'create'}), name='user-list'),
    path('api/users/<int:pk>/', views.UserViewSet.as_view({'get': 'retrieve', 'put': 'update', 'delete': 'destroy'}), name='user-detail'),
    path('api/projects/', views.ProjectViewSet.as_view({'get': 'list', 'post': 'create'}), name='project-list'),
    path('api/projects/<int:pk>/', views.ProjectViewSet.as_view({'get': 'retrieve', 'put': 'update', 'delete': 'destroy'}), name='project-detail'),
    path('api/orgs/', views.OrgViewSet.as_view({'get': 'list', 'post': 'create'}), name='org-list'),
    path('api/orgs/<int:pk>/', views.OrgViewSet.as_view({'get': 'retrieve', 'put': 'update', 'delete': 'destroy'}), name='org-detail'),
]