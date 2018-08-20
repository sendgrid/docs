#!/bin/bash


if [ "$TRAVIS_BRANCH" == "rc-master" ]; then
  S3_BUCKET="s3://sendgrid-knowledge-center-production"
else
  if [ "$OPEN_SOURCE" == "true" ]; then
    S3_BUCKET="s3://sendgrid-knowledge-center-open-source"
  else
    S3_BUCKET="s3://sendgrid-knowledge-center-staging"
  fi
fi

#AWS_ACCESS_KEY_ID=$AWS_ACCESS_KEY AWS_SECRET_ACCESS_KEY=$AWS_SECRET_ACCESS_KEY aws s3api put-bucket-website --bucket sendgrid-knowledge-center-staging --website-configuration file://static/config.json
AWS_ACCESS_KEY_ID=$AWS_ACCESS_KEY AWS_SECRET_ACCESS_KEY=$AWS_SECRET_ACCESS_KEY aws s3 sync --acl public-read --sse --delete public $S3_BUCKET
