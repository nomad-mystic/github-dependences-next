
# GitHub Dependencies Next

#### Next.js app to show, update, commit, and push dependency changes to GitHub.

## Development:

> Requires: Docker, Node.js (>=18)

* Build Images:
  * ```shell
    $ make build-development  
    ```
* Start Containers:
  * ```shell
    $ make start-development  
    ```
* Stop Containers:
  * ```shell
    $ make stop-development  
    ```
* Remove Containers:
  * ```shell
    $ make remove-development  
    ```

### MongoDB:
Content to Docker MongoDB container with Compass.
* Download MongoDB Compass
* Open Compass app
* Connect to `mongodb://localhost:27017/`

### Docker:
* Helpful commands
    * ```$ docker ps``` 
    * ```$ docker exec -it development-mongo-dev-1 bash```
    * ```$ docker inspect {CONTAINER_NAME}```

## Helpful Links:
* https://docs.docker.com/
* https://docs.docker.com/compose/reference/
* https://nextjs.org/docs
* https://react.dev/
* https://expressjs.com/

* MongoDB:
  * https://www.mongodb.com/try/download/compass
