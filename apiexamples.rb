require 'rubygems'
require 'fileutils'

html_files = File.join("/Users/brandonwest/SendGrid/docs/source/API_Reference/", "**", "*.html")

modified = Array.new
unmodified = Array.new

Dir.glob html_files do |html_file|  
  next if html_file == '.' or html_file == '..' or html_file.match('_layouts') or html_file.match('_includes') or html_file.match('deprecated')

 
  file = File.open(html_file, "r:UTF-8")
  html = file.read
  file.close
 
  do_it = false

  html.gsub!(/{% xmljsontabs (.*?)\s?%}.*?<h3>Call<\/h3>.*?{% codeblock %}(.*?){% endcodeblock %}.*?<h3>Response.*?<\/h3>(.*?)<\/div>.*?<h3>Response.*?<\/h3>.*?{% codeblock.*? %}(.*?)<\/div>.*?<\/div>/m) do |match|
    identifier = $1.strip
    http_call = $2.strip
    first_response = $3.strip
    second_response = $4.strip

    #https://api.sendgrid.com/apiv2/customer.limit.json?api_user=your_sendgrid_username&api_key=your_sendgrid_password&user=example@example.com&task=retrieve

    url = http_call.slice(0..(http_call.index('?')-1))
    data = http_call.slice((http_call.index('?')+1)..-1)

    json =$3.index('json') ? $3 : $4
    xml = $3.index('json') ? $4 : $3

    json.gsub!(/\s*<h3>Response: Success<\/h3>/,"//success")
    json.gsub!(/\s*<h3>Response<\/h3>/,'')
    json.gsub!(/\s*{% codeblock .*? %}/,"\n")
    json.gsub!(/\s*{% endcodeblock %}/,'')
    json.gsub!(/\s*<h3>Response: Error<\/h3>/,"\n\n//error")

    xml.gsub!(/\s*<h3>Response: Success<\/h3>/,'<!-- success -->')
    xml.gsub!(/\s*<h3>Response<\/h3>/,'')
    xml.gsub!(/\s*{% codeblock .*? %}/,"\n")
    xml.gsub!(/\s*{% endcodeblock %}/,'')
    xml.gsub!(/\s*<h3>Response: Error<\/h3>/,"\n\n<!-- error -->")

    output = <<-HTML
{% apiexample #{identifier} POST #{url} #{data} %}
  {% response json %}
#{json.strip}
  {% endresponse %}
  {% response xml %}
#{xml.strip}
  {% endresponse %}
{% endapiexample %}
    HTML

    do_it = true
    output
  end

  output_path = html_file  
  if do_it
    modified.push html_file
    FileUtils.rm_f(output_path)
   
    file = File.new(output_path,"w:UTF-8")
    file.write(html)
    file.close
  else
    unmodified.push html_file
  end
end

puts "Modified"
modified.each {|i|  p i}

puts "---------------------------------------------------------------------"
puts "Skipped"
unmodified.each {|i| p i}
