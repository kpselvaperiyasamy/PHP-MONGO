FROM php:8.0-apache
RUN apt update
RUN apt install libcurl4-openssl-dev pkg-config libssl-dev unzip -y
RUN pecl install mongodb
RUN docker-php-ext-enable mongodb.so
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer
RUN composer require --working-dir=/var/www mongodb/mongodb
COPY /src /var/www/html

EXPOSE 80

