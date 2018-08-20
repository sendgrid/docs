#!/bin/bash

if [ "$TRAVIS_BRANCH" == "rc-develop" ]; then
  yarn run build
elif [ "$TRAVIS_BRANCH" == "rc-master" ]; then
  GATSBY_ENV=production yarn run build --prefix-paths
fi