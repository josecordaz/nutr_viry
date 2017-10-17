node {
    def app

    // ArrayList<String> list = new ArrayList<String>();
    // list.add("one");
    // list.add("two");
    // list.add("three");

    // String listString = "";

    // for (String s : list)
    // {
    //     listString += s + "\t";
    // }

    // System.out.println(listString);

    // print()
    

    stage('Slack notification build start'){
       sh """
            curl -X POST 
                --data-urlencode 
                'payload=
                    {
                        "channel": "#general",
                        "username": "webhookbot",
                        "text": "STARTED: Job ${env.JOB_NAME} [${env.BUILD_NUMBER}], """+scm.GIT_COMMIT+""" ${env.GIT_COMMIT}",
                        "icon_emoji": ":jenkins_ci:"
                    }
                ' 
                https://hooks.slack.com/services/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
        """.replaceAll("\n", "")
    }

    stage('Clone repository'){
        /*Let's make sure we have the repository cloned to our workspace*/
        checkout scm
    }

    stage('Build image'){
        /*
        * This builds the actual image: synonymous to
        docker build on the command line
        */
        app = docker.build("josecordaz/nutr_viry")
    }

    stage('Test image'){
        /*
        * Ideally, we would run a test framework against our image.
        * For this example, we're using a Volkswagen-type approach ;-)
        */
        app.inside {
            sh 'echo "Tests passed"'
        }
    }

    stage('Push image'){
        /*
        * Finally, we'll push the image with two tags:
        * First, the incremental build number from Jenkins
        * Second, the 'latest' tag.
        * Pushing multiple tags is cheap, as all the layers are reused.
        */
        docker.withRegistry('https://registry.hub.docker.com','docker-hub-credentials'){
            app.push("${env.BUILD_NUMBER}")
            app.push("latest")
        }
    }

    stage('Stoping nutr_viry if any'){
        sh 'docker rm -f ntr_viry_c'
    }

    // stage('Pulling changes'){
    //     docker.image('josecordaz/nutr_viry:1.0').pull();
    // }

    stage('Starting nutr_viry container') {
        // docker.container("ntr_viry_c").stop();
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
                        "text": "FINISHED: Job ${env.JOB_NAME} [${env.BUILD_NUMBER}], ${env.GIT_COMMIT}",
                        "icon_emoji": ":jenkins_ci:"
                    }
                ' 
                https://hooks.slack.com/services/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
        """.replaceAll("\n", "")
    }

}
