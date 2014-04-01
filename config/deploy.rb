require 's3-static-site'
set :application, ""
set :deploy_to, ""

if ENV["TRAVIS_BRANCH"].downcase == "master"
  set :bucket, ENV["PROD_BUCKET"]
  set :access_key_id, ENV["PROD_ACCESS_KEY"]
  set :secret_access_key, ENV["PROD_SECRET_KEY"]
else
  set :bucket, ENV["BUCKET"]
  set :access_key_id, ENV["ACCESS_KEY"]
  set :secret_access_key, ENV["SECRET_KEY"]
end

