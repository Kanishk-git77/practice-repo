# Use the official Node.js image with Alpine Linux
FROM node:14-alpine

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port on which your application runs
EXPOSE 3000

# Command to run your application using nodemon
CMD ["npm", "start"]

