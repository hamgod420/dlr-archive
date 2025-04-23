# Scale-up e-Drive Dashboards Full-Stack-dockerized

Full web app is dockerized and tested locally, runs perfectly in a container.

Frontend link:
https://gitlab.dlr.de/fk-tbs/collaborative-projects/tbs-web-tools/scale-up-e-drive-dashboards

Backend link:
https://gitlab.dlr.de/fk-tbs/collaborative-projects/tbs-web-tools/scale-up-e-drive-dashboards-backend


# Instructions

This is the main repo that oversees both the frontend and backend, where they're folders that individually point to the main branch of the specific repo.

After cloning this repo run these commands:

```
cd scale-up-e-drive-dashboards-full-stack-dockerized

git submodule update --init --recursive
```

# Docker Instructions

```
docker compose build

docker compose up
```

Now you should have a container running locally!
