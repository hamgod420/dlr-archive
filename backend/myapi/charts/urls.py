# charts/urls.py
from django.urls import path
from .views import plot_chart
from .views import excel_chart_view
urlpatterns = [
    path('chart/', plot_chart, name='chart'),
    path("excel-chart/", excel_chart_view, name='excel-chart'),
]
