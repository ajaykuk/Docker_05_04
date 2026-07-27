pipeline {
    agent any

    environment {
        IMAGE_NAME = 'my-node-app'
        CONTAINER_NAME = 'node-app-container'
    }

    stages {
        stage('Checkout') {
            steps {
                // Pulls the latest code from your Git repo
                checkout scm
            }
        }
        
        stage('Build Docker Image') {
            steps {
                echo 'Building the Docker image...'
                sh "docker build -t ${IMAGE_NAME} ."
            }
        }
        
        stage('Run Container') {
            steps {
                echo 'Starting the new container...'
                // Stops and removes the old container if it's already running
                sh "docker rm -f ${CONTAINER_NAME} || true"
                
                // Runs the new image, mapping port 4000
                sh "docker run -d -p 4000:4000 --name ${CONTAINER_NAME} ${IMAGE_NAME}"
            }
        }
    }
}