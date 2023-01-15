# Building app
FROM node:16-alpine as build

WORKDIR /app

COPY . .

COPY /build ./

# Starting NGINX
FROM nginx

COPY ./nginx.conf /etc/nginx/nginx.conf

COPY --from=build /app/build /usr/share/nginx/html