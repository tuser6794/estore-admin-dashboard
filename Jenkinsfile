pipeline {
    agent any

    stages {
        stage('Source') {
            steps {
                // Get  code from a GitHub repository
                git 'https://github.com/tuser6794/estore-admin-dashboard.git'

                // Run npm install
                sh "npm install"

                echo 'Source Stage Finished'
            }
        }

        stage('Test') {
            steps {
                // Run ng test command
                sh "ng test --browsers ChromeHeadless --watch=false"
                echo 'Test Stage Finished'
            }
        }

        stage('Build') {
            steps {
                // Run ng build command
                sh "ng build"
                echo 'Test Stage Finished'
            }
        }
    }
}