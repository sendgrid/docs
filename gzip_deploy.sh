#!/bin/bash

# compress the files if they aren't
find public/ -iname '*.html' -exec gzip {} \;
find public/ -iname '*.js' -exec gzip {} \;
find public/ -iname '*.css' -exec gzip {} \;
# change their name back
find public/ -iname '*.gz' -exec rename 's/\.gz$//i' {} +

# sync gzipped files
s3cmd sync --progress --acl-public --add-header 'Content-Encoding:gzip' public/ s3://$1/ --exclude '*.*' --include '*.html' --include '*.js' --include '*.css'
# sync non gzipped files
s3cmd sync --progress --acl-public public/ s3://$1/ --exclude '*.sh' --exclude '*.html' --exclude '*.js' --exclude '*.css'