FROM nginx:1.13.1
LABEL maintainer="josecordaz@gmail.com"

COPY index.html /usr/share/nginx/html/

EXPOSE 80
