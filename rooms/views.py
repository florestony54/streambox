from django.shortcuts import render, redirect
from django.views.generic.base import TemplateView
from django.views.generic import CreateView, DetailView, ListView
from rooms.forms import RoomForm, ChannelForm
from rooms.models import Channel


# Create your views here.

class BaseView(TemplateView):

    template_name = "rooms/room_base.html"

class LandView(TemplateView):
    template_name = 'rooms/land.html'

class RoomCreateView(TemplateView):

    template_name = "rooms/room_create.html"

    def get(self, request):
        form = RoomForm()
        return render(request, self.template_name, {'form': form})

    def post(self, request):
        form = RoomForm(request.POST)
        if form.is_valid():
            text = form.cleaned_data['post']
            form = RoomForm()
            return redirect('room-view')

        args = {'form': form, 'text': text}
        return render(request, self.template_name, args)

class RoomView(TemplateView):

    template_name = "rooms/room_video.html"

class ChannelView(DetailView):

    model = Channel

class ChannelCreateView(CreateView):
    model = Channel
    # fields = ['name']
    form_class = ChannelForm

class ChannelListView(ListView):
    model = Channel
