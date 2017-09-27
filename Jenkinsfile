#!groovy
properties(
        [[$class: 'GithubProjectProperty', projectUrlStr: 'https://github.com/hmcts/submit-your-appeal'],
         pipelineTriggers([[$class: 'GitHubPushTrigger']])]
)

@Library("Infrastructure")

import uk.gov.hmcts.contino.WebAppDeploy

def product = "sscs-tribunals"
def frondEndDeployer = new WebAppDeploy(this, product, "frontend")
def computeCluster = "core-compute-sample"
node {

        stage('Checkout') {
        deleteDir()
        checkout scm
    }

    stage("Build + Test") {
        def node = tool name: 'Node-8', type: 'jenkins.plugins.nodejs.tools.NodeJSInstallation'
        env.PATH = "${node}/bin:${env.PATH}"

        /* Temporary solution to work round visibility of artifactory in CNP
         * Removing yarn.lock causes yarn to get deps from public repos. Not ideal
         * for long term because dependencies will not be stable.
         */
        sh 'rm yarn.lock'

        sh 'yarn install'
        sh 'yarn test'

    }

    stage('Deploy Dev') {

        frondEndDeployer.deployNodeJS('dev')
        frondEndDeployer.healthCheck('dev')

    }

  stage('Deploy Prod') {

        frondEndDeployer.deployNodeJS('prod')
        frondEndDeployer.healthCheck('prod')

    }

}
