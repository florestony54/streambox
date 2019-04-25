from django.contrib import admin
from django.urls import path, include, re_path
from . import views


urlpatterns = [
    path('',
        views.LandView.as_view(),
        name="land-view"),
    path('room/',
        views.RoomView.as_view(),
        name="room-view"),
    path('land/',
        views.ChannelCreateView.as_view(),
        name="room-create"),
    path('channels/',
        views.ChannelListView.as_view(),
        name="channel-list"),
    re_path(r'^channel/(?P<pk>\d+)/$',
            views.ChannelView.as_view(),
            name="channel-view"),
]
