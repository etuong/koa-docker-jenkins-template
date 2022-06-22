# Koa starter app with Docker

Koa is a web framework that aims to be a small, expressive, and robust foundation for web applications and APIs. It's like Express.js but also supports async functions! Koa is a bit less opinionated than Express especially on how it handles middleware, thus more modular or customizable. This repo is a simple Koa starter with a Dockerfile for containerization.

### To start
1. Clone repo
1. Run `npm run start`

### To dockerize
1. Build Docker image `docker build -t {tag} .`
1. Run Docker image `docker run -p 1234:{PORT} -e PORT={PORT} {tag}`

### To wire up with Jenkins
1. docker run -p 8080:8080 --user root -v jenkins_home:/var/jenkins_home jenkins/jenkins
1. Manage Git plugin and create a freestyle project pointing to this repo
1. ```bash
    apt-get update -y
    apt-get install npm -y
    npm install -y
    npm run test
    heroku git:remote -a mary-daniel
    ```
1. Use ngrok to expose localhost:8080 on the internet to trigger Jenkins upon a Github event `ngrok http 8080`
1. Create a Webhook on the Github repo from the Jenkins ngrok URL. Be sure to concatenate /github-webhook/ with application/json as the content type.
1. Add Heroku Git to Jenkins e.g `https://git.heroku.com/{APP}.git` and authenticate using your API key