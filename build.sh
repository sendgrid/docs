#!/bin/sh

if [[ "$TRAVIS_BRANCH" == "develop" ]]; then
  yarn run build
elif [["$TRAVIS_BRANCH" == "master"]]; then
  yarn run build --prefix-paths
fi