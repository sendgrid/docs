require "rubygems"
require "bundler/setup"
require "nokogiri"
require "nokogiri-pretty"
require "time"
require "shellwords"
require "json"
require "simple-cloudfront-invalidator"
require "cgi"

public_dir      = "public"    # compiled site directory
source_dir      = "source"    # source file directory
server_port     = "4000"      # port for preview server eg. localhost:4000

#######################
# Working with Jekyll #
#######################

desc "Generate jekyll site"
task :generate do
  raise "### You haven't set anything up yet. First run `rake install` to set up an Octopress theme." unless File.directory?(source_dir)
  puts "## Generating Site with Jekyll"
  system "jekyll build"
end

desc "Watch the site and regenerate when it changes"
task :watch do
  raise "### You haven't set anything up yet. First run `rake install` to set up an Octopress theme." unless File.directory?(source_dir)
  puts "Starting to watch source with Jekyll and Compass."
  jekyllPid = Process.spawn({"OCTOPRESS_ENV"=>"preview"}, "jekyll build --watch")

  trap("INT") {
    [jekyllPid].each { |pid| Process.kill(9, pid) rescue Errno::ESRCH }
    exit 0
  }

  [jekyllPid].each { |pid| Process.wait(pid) }
end

#######################
desc "preview the site in a web browser"
task :preview do
  raise "### You haven't set anything up yet. First run `rake install` to set up an Octopress theme." unless File.directory?(source_dir)
  jekyllPid = Process.spawn({"OCTOPRESS_ENV"=>"preview"}, "jekyll serve --watch")

  trap("INT") {
    [jekyllPid].each { |pid| Process.kill(9, pid) rescue Errno::ESRCH }
    exit 0
  }

  [jekyllPid].each { |pid| Process.wait(pid) }
end

desc "Clean out caches: .pygments-cache, .gist-cache, .sass-cache"
task :clean do
  rm_rf [".pygments-cache/**", ".gist-cache/**", ".sass-cache/**", "source/stylesheets/screen.css"]
end

desc "list tasks"
task :list do
  puts "Tasks: #{(Rake::Task.tasks - [Rake::Task[:list]]).join(', ')}"
  puts "(type rake -T for more detail)\n\n"
end

#####################
# Added by SendGrid #
#####################

desc "Rewrite all github style backtick code blocks with more explicit codeblocks"
task :codeblocks do
  htmlfiles = File.join("**", "source", "**", "*.html")
  
  #don't mess with the jekyll stuff
  files = FileList[htmlfiles].exclude(/_layouts/).exclude(/_includes/)
  
  files.each do |htmlfile|
    next if htmlfile == '.' or htmlfile == '..'
    puts "Converting code blocks: " + htmlfile
    file = File.open(htmlfile)   
    
    contents = file.read
    
    output = "";
    
    i=0
    contents.each_line do |line|
      if line.index('```')
        if i % 2 == 0
          puts 'found one: ' + line
          line = line.gsub(/(```)\s(.*)/,'{% codeblock lang:\2 %}')
          puts 'now: ' + line 
        else
          puts 'found one: ' + line
          line = line.gsub(/(```)/,"{% endcodeblock %}")
          puts 'now: ' + line 
        end
        i=i+1      
      end
      output = output + line
    end
    
    file = File.new(htmlfile,"w")
    file.write(output)
  end
end

desc "invalidate all files in /public on cloudfront"
task :invalidate_cloudfront do
  Dir.chdir('public')
  public_files = Dir.glob("**/*.html")
  
  cleaned_files = Array.new
  public_files.delete_if{|f| File.directory?(f) }
  public_files.each{|f| cleaned_files.push '/' + f}

  if ENV["TRAVIS_BRANCH"] == "master"
    cf_distro_id = ENV["PROD_CLOUDFRONT_DISTRO"]
  else
    cf_distro_id = ENV["DEV_CLOUDFRONT_DISTRO"]
  end
        
  invalidator = SimpleCloudfrontInvalidator::CloudfrontClient.new(ENV["PROD_ACCESS_KEY"], ENV["PROD_SECRET_KEY"], cf_distro_id)
  
  puts invalidator.invalidate(public_files) 
end

desc "run linklint and fail if errors found"
task :linklint do
  puts "Running linklint"

  puts `./linklint-2.3.5 @linklint_command`

  if File.exist?("linklint_logs/error.txt")
    fail "Linklint found broken links or missing files!"
  end
end

desc "parse XML and JSON codeblocks and identify invalid blocks"
task :validate_json_xml do
  htmlfiles = File.join("**", "source", "**", "*.html")
  
  #don't mess with the jekyll stuff
  files = FileList[htmlfiles].exclude(/_layouts/).exclude(/_includes/)
  
  json_invalid = 0
  json_valid =0
  xml_invalid = 0
  xml_valid = 0

  files.each do |htmlfile|
    #hacky. we should read excluded files from a config somewhere
    if htmlfile.scan("nodejs").length > 0
      next
    end
    file = File.open(htmlfile)
    contents = file.read
    file.close

    #Validate JSON
    contents.gsub!(/({%\s?codeblock lang:json\s?%})(.*?)({\%\s?endcodeblock\s?%})/m) do |match|
      is_json = ($2.strip).to_s.is_json?
      json = is_json ? JSON.parse($2.strip) : $2
      
      if is_json
        json_valid += 1
      else
        puts "\nINVALID JSON in #{htmlfile}: \n#{$2.strip}\n--------------------------"
        json_invalid += 1
      end
    end

    #Validate the XML
    contents.gsub!(/({%\s?codeblock lang:xml\s?%})(.*?)({\%\s?endcodeblock\s?%})/m) do |match|
      begin
        xml = Nokogiri.XML($2, nil, "UTF-8") { |config| config.strict }
      rescue
        xml_invalid += 1
        puts "\nINVALID XML in #{htmlfile}: \n#{$2.strip}\n---------------------------"
        next
      end
      xml_valid += 1
    end
  end

  puts "      Valid JSON blocks: #{json_valid}"
  puts "Invalid/non-JSON blocks: #{json_invalid}"
  puts "       Valid XML blocks: #{xml_valid}"
  puts "     Invalid XML blocks: #{xml_invalid}"

  if xml_invalid + json_invalid > 0
    fail "#{json_invalid} invalid JSON and #{xml_invalid} invalid XML block(s) found."
  end
end

class String
  def is_json?
    begin
      !!JSON.parse(self)
    rescue
      false
    end
  end
end
