from django.shortcuts import render
from django.urls import reverse_lazy
from django.views.generic import CreateView, TemplateView
from accounts.forms import UserCreateForm
from accounts.models import User
# Create your views here.

class SignUp(CreateView):
    form_class = UserCreateForm
    # model = User
    # fields = ['username', 'email', 'password']
    success_url = reverse_lazy('login')
    template_name = 'accounts/signup.html'

class ThanksView(TemplateView):
    template_name = 'accounts/thanks.html'
