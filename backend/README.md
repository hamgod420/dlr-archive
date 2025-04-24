# <Project Dynamic Dashboard>

## ℹ️ About

Backend for:
https://scale-up-edrive-dashboard.nimbus.dlr.de/


Project Dynamic Dashboard seeks to create a full-stack web application to bring the current static scale-up-e-drive dashboards to life with interactive UI and additional functions.

Frontend repo: https://gitlab.dlr.de/fk-tbs/collaborative-projects/tbs-web-tools/scale-up-e-drive-dashboards.git

Docker repo: https://gitlab.dlr.de/fk-tbs/collaborative-projects/tbs-web-tools/scale-up-e-drive-dashboards-full-stack-dockerized

## ▶️ Usage

This repo holds the Backend code built with Django responsible for generating plots using python.

## ✅ Project status

Currently, successfully deployed on github, however, this is a temporary deployment since we want to deploy it on gitlabs and our own server but this allows us to work with a database. Frontend is working but not all features are implemented.


- [x] Running Locally
- [x] Extract Data from csv
- [x] Display Graph using Plotly
- [x] Running Backend Server
- [x] Display Graph in Frontend Locally
- [x] Host Backend
- [x] Full Deployment
- [x] More Charts and Graphs

## ⌛ Timeline

2025-01-23: Created Demo dashboard with working frontend 
2025-01-24: Confirmed Project

## ✍️ Comments

In views.py each function you create is a graph accessible at http://127.0.0.1:8000/api/(name_of_chart) where the name/url of your chart can be defined in charts/urls.py

## 💻 Code Installation Guide

install dependecies

```
.\venv\Scripts\Activate.ps1

cd myapi

pip install django djangorestframework pandas plotly django-cors-headers
```

run local server

```
python manage.py runserver
```

### 📥 Cloning the Repository
Clone the repository to your local drive by using HTTPS authentication.

1. Go to your project’s landing page and select Clone. **Copy the URL to clone with HTTPS**.
1. **Open an explorer** and go to the directory where you want to clone the files. For example:
```
C:\Users\%username%\scripts\NAMEOFWORKSPACE
```

3. **Right click** and select **Git Bash Here**. 
1. Run this command:

    `git clone https://gitlab.dlr.de/fk-tbs/collaborative-projects/tbs-web-tools/scale-up-e-drive-dashboards-backend.git

5. If you are not familiar with Git Bash you can also just right click into the folder and select **Git Clone...** and copy paste the HTTPS link in the URL field. **TortoiseGit** will then clone the repo for you. 
5. Git automatically creates a folder with the repository name and downloads the files there.

## ✍️ Authorship

Andy Yan (andy.yan@dlr.de)

### Project collaborators
- AUTHOR_NAME, FK-TBS, AUTHOR_EMAIL

### Supervisor
- Hasselwander_Samuel

## 📃 License

This will be determined later ...

## 📖 Citation
> ...
