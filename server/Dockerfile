# Use Node
FROM node:10

# Create the app directory
WORKDIR /usr/src/app

# Copy working files and install packages
COPY package*.json ./
RUN npm install

# Bundle the app source
COPY . .

# Use port 80
EXPOSE 80

# Starting command
CMD ["node", "index.js"]