#!/bin/bash

if [ "$TRAVIS_BRANCH" == "rc-develop" ]; then
  yarn run build --prefix-paths
elif [ "$TRAVIS_BRANCH" == "rc-master" ]; then
  GATSBY_ENV=production yarn run build --prefix-paths
fi