# Base image
FROM node:latest

# Specify the working directory
WORKDIR /usr/app

# Copy everything and install dependencies
COPY package*.json ./
COPY server.js ./
COPY pages/**/* ./pages/
RUN npm install

# Expose server
EXPOSE 1234

# Run application
CMD ["node", "server.js"]