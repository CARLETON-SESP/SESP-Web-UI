pipeline {
    environment {
        registry = "sespsyscon/front.end"
        DOCKER_ID = credentials('docker-hub-id')
    }

    agent any

    stages {

        stage('Automated Testing') {
            steps {
                sh 'echo call script for selenium testing here...'
            }
        }

        stage('Build & Push Docker Image') {
            when {
                branch "jake_jenkins"
            }
            steps {
               withCredentials([file(credentialsId: 'Jenkins_EC2', variable: 'PEM_KEY')]) {
                    sh ''' 
                        chmod 400 ${PEM_KEY}
                        ssh -o StrictHostKeyChecking=no -i "${PEM_KEY}" ubuntu@ec2-54-147-116-103.compute-1.amazonaws.com 'bash -s' < ./docker_build.sh ${DOCKER_ID_USR} ${DOCKER_ID_PSW}
                    '''
                }    
            }
        }

    }
}