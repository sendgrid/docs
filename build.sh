#!/bin/sh

if [ "$TRAVIS_BRANCH" == "rc-develop" ]; then
  yarn run build
elif [ "$TRAVIS_BRANCH" == "rc-master" ]; then
  yarn run build --prefix-paths
fi