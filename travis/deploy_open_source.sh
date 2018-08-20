#!/bin/bash


cd public
mkdir docs
mv * docs
cd ../

echo "Deploying to open source bucket"
AWS_ACCESS_KEY_ID=$AWS_ACCESS_KEY AWS_SECRET_ACCESS_KEY=$AWS_SECRET_ACCESS_KEY aws s3 sync --acl public-read --sse --delete public s3://sendgrid-knowledge-center-open-source
