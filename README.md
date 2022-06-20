# Koa starter app with Docker

Koa is a web framework that aims to be a small, expressive, and robust foundation for web applications and APIs. It's like Express.js but also supports async functions! Koa is a bit less opinionated than Express especially on how it handles middleware, thus more modular or customizable. This repo is a simple Koa starter with a Dockerfile for containerization.

### To start
1. Clone repo
1. Build Docker image `docker build -t {tag} .`
1. Run Docker image `docker run -p 1234:{PORT} -e PORT={PORT} {tag}`