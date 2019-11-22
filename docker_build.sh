#!/bin/bash

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

# sudo docker image build -t sespsyscon/sesp-web-ui . 