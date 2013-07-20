require 's3-static-site'
set :application, ""
set :deploy_to, ""
set :bucket, ENV["BUCKET"]
set :access_key_id, ENV["ACCESS_KEY"]
set :secret_access_key, ENV["SECRET_KEY"]
