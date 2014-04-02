require 'yaml'
  config = YAML.load_file('_config.yml')
  config['root'] = 'http://sendgrid.com/docs'
  config['indextank'] = true
  config['indextank_index'] = ENV["INDEXTANK_INDEX"]
  config['indextank_api_url'] = ENV["INDEXTANK_API_URL"]

  File.open('_config.yml','w') do |f| 
     f.write config.to_yaml
end
