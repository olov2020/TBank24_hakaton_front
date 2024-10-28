# Use an official node runtime as a parent image
FROM node:20-alpine AS builder

WORKDIR /src
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Nginx Server (Production)
FROM nginx:alpine

# Copy the build output from the builder stage
COPY --from=builder /src/dist /usr/share/nginx/html

# Configure Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]