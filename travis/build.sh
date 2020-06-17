#!/bin/bash

if [ "$TRAVIS_BRANCH" == "develop" ]; then
  npm run build:pp
elif [ "$TRAVIS_BRANCH" == "main" ]; then
  GATSBY_ENV=production npm run build:pp
fi