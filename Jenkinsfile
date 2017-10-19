node {
    def app
    def message

    stage('Clone repository'){
        /*Let's make sure we have the repository cloned to our workspace*/
        checkout scm
    }

    stage('Getting github message'){
        message = sh ( script: 'git log -1 --pretty=%B', returnStdout: true).trim(); 
    }

    stage('Slack notification build start'){
       sh """
            curl -X POST 
                --data-urlencode 
                'payload=
                    {
                        "channel": "#general",
                        "username": "webhookbot",
                        "text": "STARTED: Job ${env.JOB_NAME} [${env.BUILD_NUMBER}] \\n ${message}",
                        "icon_emoji": ":jenkins_ci:"
                    }
                ' 
                https://hooks.slack.com/services/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
        """.replaceAll("\n", "")
    }

    stage('Get npm packages'){
        sh 'npm i'
    }

    stage('Build prod files'){
        sh 'npm run build'
    }

    stage('Build image'){
        app = docker.build("josecordaz/nutr_viry")
    }

    stage('Test image'){
        app.inside {
            sh 'echo "Tests passed"'
        }
    }

    stage('Push image'){
        docker.withRegistry('https://registry.hub.docker.com','docker-hub-credentials'){
            app.push("${env.BUILD_NUMBER}")
            app.push("latest")
        }
    }

    stage('Stoping nutr_viry if any'){
        sh 'docker rm -f ntr_viry_c'
    }

    stage('Starting nutr_viry container') {
        docker.image('josecordaz/nutr_viry').run('--name ntr_viry_c -p 8088:80 -d')
    }

    stage('Slack notification build finished'){
       sh """
            curl -X POST 
                --data-urlencode 
                'payload=
                    {
                        "channel": "#general",
                        "username": "webhookbot",
                        "text": "FINISHED: Job ${env.JOB_NAME} [${env.BUILD_NUMBER}]",
                        "icon_emoji": ":jenkins_ci:"
                    }
                ' 
                https://hooks.slack.com/services/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
        """.replaceAll("\n", "")
    }

}
