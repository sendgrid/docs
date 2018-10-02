require "rubygems"
require "bundler/setup"
require "nokogiri"
require "nokogiri-pretty"
require "time"
require "shellwords"
require "json"
require "simple-cloudfront-invalidator"
require "cgi"
require "indextank"

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

desc "Rewrite all GitHub style backtick code blocks with more explicit codeblocks"
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

desc "index the generated files"
task :index do
  htmlfiles = File.join("**", "public", "**", "*.html")

  #don't mess with the jekyll stuff
  files = FileList[htmlfiles].exclude(/_layouts/).exclude(/_includes/).exclude(/_assets/)

  puts 'Indexing pages...'
  @storage_dir = File.join(Dir.pwd, '.jekyll_indextank')
  @last_indexed_file = File.join(@storage_dir, 'last_index')

  begin
    Dir.mkdir(@storage_dir) unless File.exists?(@storage_dir)
  rescue SystemCallError
    puts 'WARNING: cannot create directory to store index timestamps.'
  end

  begin
    @last_indexed = File.open(@last_indexed_file, "rb") {|f| Marshal.load(f)}
  rescue
    @last_indexed = nil
  end

  api = IndexTank::Client.new(ENV["INDEXTANK_API_URL"])
  @index = api.indexes(ENV["INDEXTANK_INDEX"])

  while not @index.running?
    # wait for the indextank index to get ready
    sleep 0.5
  end

  files.each do |htmlfile|
    next if htmlfile.include?("index.html")
    doc = Nokogiri::HTML(File.open(htmlfile))

    #remove some elements we don't want to index
    doc.search('article code, article code-button').remove

    #we only want to index the contents of certain elements in the <article> tag
    elements = doc.search('article a, article h1, article h2, article h3, article h4, article h5, article h6, article p, article td').map {|e| e.text}
    page_text = elements.join(" ").gsub("\r"," ").gsub("\n"," ")

    url = htmlfile.gsub('public','')

    @index.document(url).add({
      :text => page_text,
      :title => doc.title
    })
    puts 'Indexed ' << htmlfile
  end

  @last_indexed = Time.now
  begin
    File.open(@last_indexed_file, 'w') {|f| Marshal.dump(@last_indexed, f)}
  rescue
    puts 'WARNING: cannot write indexed timestamps file.'
  end

  puts 'Indexing done'
end

desc "run linklint and fail if errors found"
task :linklint do
  puts "Running linklint"

  puts `./linklint-2.3.5 @linklint_command`

  if File.exist?("linklint_logs/error.txt")
    puts File.read("linklint_logs/errorX.txt")
    fail "Linklint found broken links or missing files!"
  end
end

desc "parse XML and JSON codeblocks and identify invalid blocks"
task :validate_json_xml do
  htmlfiles = File.join("**", "source", "**", "*.{html,md}")

  #don't mess with the jekyll stuff
  files = FileList[htmlfiles].exclude(/_layouts/).exclude(/_includes/).exclude(/_assets/)

  json_invalid = 0
  json_valid =0
  xml_invalid = 0
  xml_valid = 0

  files.each do |htmlfile|
    #hacky. we should read excluded files from a config somewhere
    if htmlfile.scan("nodejs").length > 0
      next
    end
    file = File.open(htmlfile, "r:UTF-8")
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

    contents.gsub!(/({%\s?response json\s?%})(.*?)({\%\s?endresponse\s?%})/m) do |match|
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

        xml = $2.to_s.strip

        xml = Nokogiri::XML(xml) { |config| config.strict }

      rescue Nokogiri::XML::SyntaxError => e
        xml_invalid += 1
        puts "\nINVALID XML in #{htmlfile}: \n#{$2.to_s.strip}\n"
        puts "caught exception: #{e}"
        puts "---------------------------"
        next
      end
      xml_valid += 1
    end

    contents.gsub!(/({%\s?response xml\s?%})(.*?)({\%\s?endreponse\s?%})/m) do |match|
      begin

        xml = $2.to_s.strip

        xml = Nokogiri::XML(xml) { |config| config.strict }

      rescue Nokogiri::XML::SyntaxError => e
        xml_invalid += 1
        puts "\nINVALID XML in #{htmlfile}: \n#{$2.to_s.strip}\n"
        puts "caught exception: #{e}"
        puts "---------------------------"
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
