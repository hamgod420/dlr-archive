import os
from django.conf import settings
import pandas as pd
import plotly.express as px
from django.http import HttpResponse

def plot_chart(request):
    # Construct the full path to the CSV file using BASE_DIR from settings
    csv_path = os.path.join(settings.BASE_DIR, "IEA Global EV Data 2024.csv")

    # Read the CSV file
    df = pd.read_csv(csv_path)

    # Group and chart creation logic
    grouped_df = df.groupby(["year", "region"], as_index=False)["value"].sum()
    fig = px.area(
        grouped_df,
        x="year",
        y="value",
        color="region",
        title="Sum of Stock by Region (2015–2022)"
    )

    print("Current working directory:", os.getcwd())

    chart_html = fig.to_html(full_html=False, include_plotlyjs='cdn')
    return HttpResponse(chart_html)


def excel_chart_view(request):
    # Construct the full path to the Excel file
    xlsx_path = os.path.join(
        settings.BASE_DIR,
        "IEA-EV-dataEV salesCarsHistorical_neueReihenfolge_Scaleup.xlsx"
    )

    # Read the Excel file with no header (so we can process the header manually)
    df = pd.read_excel(xlsx_path, engine="openpyxl", header=None)

    # The first cell of the first row contains the header as a single comma-separated string
    header = df.iloc[0, 0].split(',')

    # Drop the first row (the header) and split the single-column values into multiple columns
    df = df[1:]  # Remove header row
    # Assume each row is in the first column as a comma-separated string
    df = df[0].str.split(',', expand=True)
    df.columns = header  # Set the new columns

    # Convert columns to appropriate types, e.g. 'year' and 'value' should be numeric
    df['year'] = pd.to_numeric(df['year'], errors='coerce')
    df['value'] = pd.to_numeric(df['value'], errors='coerce')

    # Group the data by "year" and "region" (using "region" as the country indicator)
    grouped_df = df.groupby(["year", "region"], as_index=False)["value"].sum()

    # Create an interactive Plotly stacked area chart
    fig = px.area(
        grouped_df,
        x="year",
        y="value",
        color="region",
        title="EV Sales by Region Over Time",
        template="plotly_white",
    )

    # Convert the figure to HTML and return it in the response
    chart_html = fig.to_html(full_html=False, include_plotlyjs='cdn')
    return HttpResponse(chart_html)