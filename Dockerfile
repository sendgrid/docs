FROM ruby:2.3.5

WORKDIR /docs
SHELL ["/bin/bash", "-lc"]

# Java
RUN apt-get update && \
  apt-get install -y openjdk-7-jdk && \
  rm -rf /var/lib/apt/lists/*
ENV JAVA_HOME /usr/lib/jvm/java-7-openjdk-amd64

# Node.js
RUN curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.6/install.sh | bash
ADD .nvmrc /docs
RUN nvm install $(cat .nvmrc)
RUN npm install -g bower

ADD package.json package-lock.json /docs/
RUN npm install
ADD bower.json .bowerrc /docs/
RUN bower install --allow-root
ADD Gemfile Gemfile.lock /docs/
RUN bundle install -j 4

ADD . /docs

COPY _config.sample.yml _config.yml

EXPOSE 4000

CMD ["/bin/bash", "-lc", "bundle exec rake preview"]
