# Use an official Node.js image as base
FROM node:18

# Create app directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Your app binds to port 3000 (change if needed)
EXPOSE 3000

# Run the application
CMD ["node", "server.js"]