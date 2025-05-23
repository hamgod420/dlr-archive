# Scale-up e-Drive Dashboards Full-Stack-dockerized

Full web app is dockerized and tested locally, runs perfectly in a container.

Frontend link:
https://gitlab.dlr.de/fk-tbs/collaborative-projects/tbs-web-tools/scale-up-e-drive-dashboards

Backend link:
https://gitlab.dlr.de/fk-tbs/collaborative-projects/tbs-web-tools/scale-up-e-drive-dashboards-backend


# Installation Instructions

This is the main repo that oversees both the frontend and backend, where they're folders that individually point to the main branch of the specific repo.

After cloning this repo run these commands:

```
cd scale-up-e-drive-dashboards-full-stack-dockerized

git submodule update --init --recursive

git submodule update --remote --merge

```



# Docker Instructions

Ensure Docker Desktop is running, run this command to check:

```
docker version
```

If you are trying the docker container in development we need to create an .env.local in the frontend folder with this variable:

```
NEXT_PUBLIC_API_URL=http://127.0.0.1:8000
```

Now we can build our container:

```
docker compose build

docker compose up
```

Now you should have a container running locally!

Run this command once you are done:

```
docker compose down
```

# Nimbus Production

Before we continue we need to hardcode urls for our charts, example in [sum-of-stock.tsx](https://gitlab.dlr.de/fk-tbs/collaborative-projects/tbs-web-tools/scale-up-e-drive-dashboards/-/blob/main/app/ui/dashboard/1/sum-of-stock.tsx) 

![alt text](image.png)



In your root folder with the docker files open a new terminal and run these commands:

```
docker login harbor.fa-services.intra.dlr.de
```
Enter your username and CLI secret which can be found in your profile in [Harbor](https://harbor.fa-services.intra.dlr.de/)

Now run:

```
docker compose -f docker-stack-nimbus.yml build

docker compose -f docker-stack-nimbus.yml push
```
Now try either of these options
-	Open [Portainer](https://portainer.nimbus.dlr.de/#!/home) -> Stacks -> Open your stack -> Editor -> Update the stack -> Make sure to hit “Re-pull image and re-deploy” or
-	(Suggested) Open [Portainer](https://portainer.nimbus.dlr.de/#!/home) -> Stacks -> Open your stack -> Select all Services  -> Hit “update” -> Make sure to toggle “Re-pull image”

Check out the updated page: https://scale-up-edrive-dashboard.nimbus.dlr.de/
