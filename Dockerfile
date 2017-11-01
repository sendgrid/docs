FROM ruby:2.3.5

WORKDIR /docs
SHELL ["/bin/bash", "-lc"]

# Java
RUN apt-get update -qq && \
  apt-get install -y -qq openjdk-7-jdk && \
  rm -rf /var/lib/apt/lists/*
ENV JAVA_HOME /usr/lib/jvm/java-7-openjdk-amd64

# Node.js
RUN curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.6/install.sh | bash
COPY .nvmrc /docs
RUN nvm install $(cat .nvmrc)

COPY package.json package-lock.json /docs/
RUN npm install -g bower && \
  npm install
COPY bower.json .bowerrc /docs/
RUN bower install --allow-root
COPY Gemfile Gemfile.lock /docs/
RUN bundle install -j 4

COPY . /docs

COPY _config.sample.yml _config.yml

EXPOSE 4000

CMD ["/bin/bash", "-lc", "bundle exec rake preview"]
