#!/bin/bash

aws configure set preview.cloudfront true

if [ "$TRAVIS_BRANCH" == "rc-master" ]; then
  DIST_ID=$CLOUDFRONT_DIST_ID_PROD
else
  DIST_ID=$CLOUDFRONT_DIST_ID_STAGE
fi

AWS_ACCESS_KEY_ID=$AWS_ACCESS_KEY AWS_SECRET_ACCESS_KEY=$AWS_SECRET_ACCESS_KEY aws cloudfront create-invalidation --distribution-id $DIST_ID --paths "/*"