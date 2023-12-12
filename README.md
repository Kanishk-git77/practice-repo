# CRUD API using Javascript

This is beginner level project which shows how to create a CRUD API using Javascript.

## Prerequisites

- Docker installed on your local machine. You can download it [here](https://docs.docker.com/get-docker/).

## Getting Started

1. Clone the repository to your local machine:

    ```bash
    git clone https://github.com/your-username/your-project.git
    cd your-project
    ```

2. Build the Docker image:

    ```bash
    docker build -t your-image-name .
    ```

3. Run the Docker container:

    ```bash
    docker run -p 3000:3000 -d your-image-name
    ```

   The application will be accessible at [http://localhost:3000](http://localhost:3000).

## Stopping the Container

To stop the running container, use the following command:

```bash
docker stop container-id

