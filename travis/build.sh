#!/bin/bash

if [ "$TRAVIS_BRANCH" == "develop" ]; then
  yarn run build --prefix-paths
elif [ "$TRAVIS_BRANCH" == "master" ]; then
  GATSBY_ENV=production yarn run build --prefix-paths
fi