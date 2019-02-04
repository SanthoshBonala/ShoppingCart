node('slave'){
  def payload = readJSON "$payload"
  stage('print'){
  git credentialsId: '09eefd18-6e26-4f72-951a-a9c2eaa2dfa8',
      url: 'https://github.com/SanthoshBonala/ShoppingCart'
    
    sh "echo " + payload.hook
  }
  
  when { True }
  stage('checking when'){
  sh "echo when true"
  }
}
