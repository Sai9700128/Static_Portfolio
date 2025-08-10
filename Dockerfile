# Use Node.js as base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./


RUN npm ci --only=production

# Copy source code
COPY . .

# Build the portfolio
RUN npm run build

# Use nginx to serve the built app
FROM nginx:alpine

# Copy built files from the previous stage
COPY --from=0 /app/build /usr/share/nginx/html

# Expose port
EXPOSE 80