require 'yaml'
  config = YAML.load_file('_config.yml')
  config['root'] = '//sendgrid.com/docs'

  File.open('_config.yml','w') do |f| 
     f.write config.to_yaml
end
