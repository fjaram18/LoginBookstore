FROM nginx:alpine
COPY ./nginx-conf/nginx.conf /etc/nginx/conf.d/default.conf
COPY ./build /usr/share/nginx/html/bookstore
EXPOSE 80 3000
