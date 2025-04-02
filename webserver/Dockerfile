# Compile reactjs application
FROM docker.io/node:18 AS builder

WORKDIR /app

COPY ./app/package.json ./app/package-lock.json ./

RUN npm install

COPY ./app/ ./

RUN npm run build

# Start nginx webserver
FROM docker.io/nginx:latest

WORKDIR /usr/share/nginx/html

COPY --from=builder /app/build /usr/share/nginx/html

COPY ./nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
