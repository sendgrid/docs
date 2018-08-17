#!/bin/bash


if [ "$TRAVIS_BRANCH" == "rc-master" ]; then
  AWS_ACCESS_KEY_ID=$AWS_ACCESS_KEY AWS_SECRET_ACCESS_KEY=$AWS_SECRET_ACCESS_KEY aws s3 sync --acl public-read --sse --delete public s3://sendgrid-knowledge-center-production
else
    AWS_ACCESS_KEY_ID=$AWS_ACCESS_KEY AWS_SECRET_ACCESS_KEY=$AWS_SECRET_ACCESS_KEY aws s3 sync --acl public-read --sse --delete public s3://sendgrid-knowledge-center-open-source
    AWS_ACCESS_KEY_ID=$AWS_ACCESS_KEY AWS_SECRET_ACCESS_KEY=$AWS_SECRET_ACCESS_KEY aws s3 sync --acl public-read --sse --delete public s3://sendgrid-knowledge-center-staging
fi
