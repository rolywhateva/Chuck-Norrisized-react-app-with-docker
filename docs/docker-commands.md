# Utils 
## View current containers 
```
docker ps -a 
```

## Stop container 
```
docker stop <<container_id>>
```

# Local development image 
## Build image 
```
 docker build . -t reactdockerexampleimage -f docker/Dockerfile.local-development
```

## Run container 
### With volume 
```
 docker run -v /app/node_modules  -v  ${PWD}:/app  --name  reactdockerexamplecontainer -p 5173:5173  reactdockerexampleimage
```
### Without volume 
```
 docker run  --name  reactdockerexamplecontainer -p 5173:5173  reactdockerexampleimage
```

# Production image 
## Build image 
```
docker build . -t reactproductionimageexample -f Dockerfile.prod
```

## Run container
```
docker run -p 80:80  --name  reactproductioncontainer reactproductionimageexample
```