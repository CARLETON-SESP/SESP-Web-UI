pipeline {
    environment {
        registry = "sespsyscon/front.end"
        DOCKER_ID = credentials('docker-hub-id')
    }

    agent any

    stages {

        stage('automated testing') {
            steps {
                sh 'echo call script for selenium testing here...'
            }
        }

        stage('build docker image') {
            when {
                branch "jake_jenkins"
            }
            steps {
               withCredentials([file(credentialsId: 'josh-vm', variable: 'PEM_KEY')]) {
                    sh ''' 
                        chmod 400 ${PEM_KEY}
                        ssh -i "${PEM_KEY}" ubuntu@ec2-54-82-2-158.compute-1.amazonaws.com 'bash -s' < ./docker_build.sh
                    '''
                }

            }
        }

        // stage('push docker hub') {
        
        //     when {
        //         branch "master"
        //     }
        //     steps { 
        //         sh '''
        //             docker login -u ${DOCKER_ID_USR} -p ${DOCKER_ID_PSW}
        //             docker  push sespsyscon/front.end:sesp-web-ui
        //        '''
        //     }
        // }
    }
}