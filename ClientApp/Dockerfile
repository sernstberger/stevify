FROM nginx:1.11.10

# Remove existing web content
RUN rm -rf /usr/share/nginx/html/*

ENV BUILD_PACKAGES="curl nodejs build-essential git yarn"

# Install NodeJS and create a staging area for our code
RUN \
     apt-get update \
  && apt-get -y install curl apt-transport-https \
  && curl -sL https://deb.nodesource.com/setup_9.x | bash - \
  && curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - \
  && echo "deb https://dl.yarnpkg.com/debian/ stable main" > /etc/apt/sources.list.d/yarn.list \
  && apt-get update \
  && apt-get -y install $BUILD_PACKAGES \
  && mkdir /src

COPY nginx/default-vhost.conf /etc/nginx/conf.d/default.conf
WORKDIR /src
