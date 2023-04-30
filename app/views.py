
from django.contrib.auth.views import LoginView
from django.shortcuts import render
from django.views.generic import TemplateView, CreateView
from django.views import generic
from .forms import RegisterUserForm,LoginUserForm
from .models import *
def home(request):
    data={"is_aut":request.user.is_authenticated}
    return render(request,"app/index.html",data)

def user_log(request):
    return render(request,"app/user_log.html")

class RegisterUser(CreateView):
    form_class = RegisterUserForm
    template_name = 'app/reg.html'

class LoginUser( LoginView):
    form_class =LoginUserForm
    template_name = 'app/login.html'
    success_url = ""



class Checkout_view(TemplateView):
    template_name="app/checkout.html"

class Product_view(TemplateView):
    template_name = "app/product.html"

class Shopping_view(TemplateView):
    template_name = "app/shoppingcart.html"

class Single_page_view(TemplateView):
    template_name = "app/singlepage.html"