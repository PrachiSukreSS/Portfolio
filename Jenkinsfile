pipeline {
  agent { label 'Jenkins-Agent'}
  tools {
    jdk 'Java17'
    maven 'Maven3'
  }
  stages {
    stage("Cleanup Workspace"){
      steps{
        cleanWS()
      }
      }
    stage ("Checkout fron SCM"){
      steps{
        git branch: 'main', credentialsId: 'github' , url: 'https://github.com/PrachiSukreSS/Portfolio'
      }
    }
    stage("Build Application"){
      steps{
        sh "mvn clean package"
      }
      }
    
     stage("Test Application"){
      steps{
        sh "mvn test"
      }
      }
  }
}
