#!/bin/bash
DOCKER_ID_USR=$1
DOCKER_ID_PSW=$2

echo "script worked"
if [ -d "SESP-Web-UI" ]; then
    echo "GIT REPO EXISTS... PULLING"
    cd SESP-Web-UI
    git pull
else
    echo "GIT REPO DOES NOT EXIST... CLONING"
    git clone https://github.com/CARLETON-SESP/SESP-Web-UI.git
    cd SESP-Web-UI
fi

sudo docker image build -t sespsyscon/sesp-web-ui . 

sudo docker login -u $DOCKER_ID_USR -p $DOCKER_ID_PSW
sudo docker push sespsyscon/sesp-web-ui