#!/bin/bash

# compress the files if they aren't
find public/ -iname '*.html' -exec gzip {} \;
find public/ -iname '*.js' -exec gzip {} \;
find public/ -iname '*.css' -exec gzip {} \;
# change their name back
find public/ -iname '*.gz' -exec rename 's/\.gz$//i' {} +