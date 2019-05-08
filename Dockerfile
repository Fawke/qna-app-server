# Pull the base image
FROM mhart/alpine-node

# Declare the work directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install all node dependencies
RUN npm install

# Copy the entire source code
COPY . ./

# Expose 8080
EXPOSE 8080

# Execute npm start when the container is running
CMD ["npm", "start"]