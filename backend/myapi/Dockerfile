# Use an official lightweight Python image
FROM python:3.9-slim

# Prevent Python from writing .pyc files to disk and buffer stdout/stderr
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# Set the working directory inside the container
WORKDIR /app

# Install system dependencies (e.g., gcc and libpq-dev for PostgreSQL)
RUN apt-get update && apt-get install -y gcc libpq-dev && rm -rf /var/lib/apt/lists/*

# Copy requirements file and install Python dependencies
COPY requirements.txt /app/
RUN pip install --upgrade pip
RUN pip install --no-cache-dir -r requirements.txt

# Copy the entire Django project to the container
COPY . /app/

# Expose port 8000 (Django default)
EXPOSE 8000

# Use Gunicorn to serve the Django app
CMD ["gunicorn", "myapi.wsgi:application", "--bind", "0.0.0.0:8000"]
