#!/bin/bash

if [ "$TRAVIS_BRANCH" == "develop" ]; then
  npm run build --prefix-paths
elif [ "$TRAVIS_BRANCH" == "master" ]; then
  GATSBY_ENV=production npm run build --prefix-paths
fi