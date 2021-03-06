from unicodedata import name
from django.urls import path
from . import views

urlpatterns = [
    path('', views.PollListView.as_view(), name="home"),
    path('<int:pk>', views.singlePollDetail, name='poll-detail'),
    path('<int:pk>/data', views.poll_data_view, name='poll-data-view'),
    path('<int:pk>/save', views.save_poll_data, name='save-poll-view'),
    path('<int:pk>/result', views.result_data, name='result'),
    path('<int:pk>/result-json/', views.result_json, name='result-data-json'),
    path('create/', views.check_create_poll, name='create'),
    path('profile-dash/', views.profile_dashboard, name='profile-dash'),
    path('profile-info/', views.profile_info, name='profile-info'),
    path('user-poll/', views.userPoll, name='user-poll'),
    # path('poll-detail/<int:pk>/', views.PollDetailView.as_view(), name='userPollDetail')
    path('userPollDetail/<int:pk>', views.userPollDetail, name='userPollDetail'),
    path('delelePoll/<int:pk>', views.deletePoll, name='deletePoll'),

]

handler404 = 'poll.views.page_not_found'