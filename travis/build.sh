#!/bin/bash

if [ "$TRAVIS_BRANCH" == "rc-develop" ]; then
  yarn run build --prefix-paths=$PREFIX_PATHS
elif [ "$TRAVIS_BRANCH" == "rc-master" ]; then
  GATSBY_ENV=production yarn run build --prefix-paths=$PREFIX_PATHS
fi