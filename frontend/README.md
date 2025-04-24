# <Project Dynamic Dashboard>

## ℹ️ About

https://scale-up-edrive-dashboard.nimbus.dlr.de/


Project Dynamic Dashboard seeks to create a full-stack web application to bring the current static scale-up-e-drive dashboards to life with interactive UI and additional functions.

## ▶️ Usage


## ✅ Project status

We are done our first model pretty much! We have a complete dashboard created in our first page with interactive features, graphs, dark/light mode, UI/UX, pulling data from plotly hosted on our django server. I created a contact page with Samuel contact info with a default email communication page setup as well as a template page for future developers. We also have successfully hosted it on nimbus through a dockerizing process. Currently, offboarding meaning documentation and figuring out how to streamline future development.

Backend repo: https://gitlab.dlr.de/fk-tbs/collaborative-projects/tbs-web-tools/scale-up-e-drive-dashboards-backend.git

Docker repo: https://gitlab.dlr.de/fk-tbs/collaborative-projects/tbs-web-tools/scale-up-e-drive-dashboards-full-stack-dockerized

![alt text](/readme/image.png)
![alt text](/readme/image-1.png)
![alt text](/readme/image-2.png)
![alt text](/readme/image-3.png)
![alt text](/readme/image-4.png)
![alt text](/readme/image-5.png)
![alt text](/readme/image-6.png)
![alt text](/readme/image-7.png)
![alt text](/readme/image-8.png)


- [x] Working frontend
- [x] Working backend
    - [x] Set-up Server
    - [x] Set-up postgres
    - [x] Set-up Django - (See more in backend repo)
- [x] International markets dashboard frontend
    - [x] Fully realized graph
        - [x] All countries
        - [x] Line Plot
        - [x] Hovering Features
        - [x] Isolate Countries
        - [x] Year version history
        - [x] Filters - Vehicle Types, Fuel Types, etc
    - [x] Connect frontend with backend
- [x] Python Integration - (See more in backend repo)
- [x] Fully complete full-stack app for Internation markets dashboard

## ✍️ Comments

...

## 💻 Code Installation Guide


Install node.js online, INSTALL VERSION v20.x.x
https://nodejs.org/en/download

You can choose to only clone this repo or the full app (including backend) through here [Full Project](https://gitlab.dlr.de/fk-tbs/collaborative-projects/tbs-web-tools/scale-up-e-drive-dashboards-full-stack-dockerized)

After cloning the repo enter the folder and run these commands and check if they return the correct version number:

```
node -v
npm -v
```

Now install dependencies:
```
npm install -g pnpm
pnpm i
```

To run development server run:

```
pnpm dev
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

    `git clone https://gitlab.dlr.de/fk-tbs/collaborative-projects/tbs-web-tools/scale-up-e-drive-dashboards.git

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