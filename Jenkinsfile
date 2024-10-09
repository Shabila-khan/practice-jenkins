//Its a Jenkins
//pipeline adding


pipeline{
    agent any
    stages{
        //clone repo
        stage("clone repo")
        {
            steps{
                git branch:'main',url:'https://github.com/Shabila-khan/practice-jenkins.git'
            }
        }
        //install dependencies
        stage('Install dependencies'){
            steps{   
                sh 'npm install'
            }
        }
        // stages('Testing my application'){
        //     steps{
        //         sh 'npm test'
        //     }
        // }
        //start the application
        stage('Start the  application'){
            input{
                message 'Do you really want to start'
                ok "Click on ok"
                submitter "Shabila"
            }
            steps{
                sh 'npm start'
            }
        }
    }
}