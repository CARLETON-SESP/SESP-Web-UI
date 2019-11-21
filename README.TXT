https://www.peterbe.com/plog/how-to-create-react-app-with-docker

docker image build -t sesp-web-ui:SESP-Web-UI .
docker container run -it react:app bash
docker container run --name sesp-ui -it -p 3000:3000 -p 35729:35729 -v $(pwd):/app sesp-web-ui:SESP-Web-UI

#test