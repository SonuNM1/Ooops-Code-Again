# Use an official Node.js runtime as a parent image

FROM node:latest

# Copy local machine files into the Docker container - first dot refers to the current directory on our local machine, second dot refers to the working directory inside the container  

COPY . .

# Install the dependencies 

RUN npm install 

# Expose the app port 

EXPOSE 5000

# Command to run the app 

CMD ["node", "index.js"]