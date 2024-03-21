from django.urls import path, include
from rest_framework.routers import DefaultRouter
from main import views

router = DefaultRouter()
router.register(r'users', views.UserViewSet)
router.register(r'projects', views.ProjectViewSet)
router.register(r'orgs', views.OrgViewSet)

urlpatterns = [
    path('', include(router.urls)),
]