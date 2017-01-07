FROM ubuntu:16.04
LABEL info.hypocrisy.version="0.1" \
      info.hypocrisy.author="Hypocrisy Hermes" \
      info.hypocrisy.timestamp="2017-01-06"
RUN apt update && apt install -y nginx && apt install -y letsencrypt
RUN rm /etc/nginx/nginx.conf /etc/nginx/sites-available/default /etc/nginx/sites-enabled/default
COPY nginx/nginx.conf /etc/nginx/
COPY nginx/sites-available/hypocrisy.info /etc/nginx/sites-available/
RUN ln -s /etc/nginx/sites-available/hypocrisy.info /etc/nginx/sites-enabled/hypocrisy.info
RUN mkdir /etc/letsencrypt
COPY letsencrypt/ /etc/letsencrypt
RUN mkdir /var/www/hypocrisy
COPY www/ /var/www/hypocrisy
EXPOSE 80
CMD nginx && /bin/bash
