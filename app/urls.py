from django.urls import path
from .views import *
urlpatterns = [
    path("",home,name="home"),
    path("checkout",Checkout_view.as_view(),name="checkout"),
    path("product",Product_view.as_view(),name="product"),
    path("shoping",Shopping_view.as_view(),name="shoping"),
    path("single",Single_page_view.as_view(),name="single"),
    path("reg",RegisterUser.as_view(),name="register"),
    path('login/', LoginUser.as_view(), name='login'),
    path("accounts/profile/",user_log,name="user_log")
]