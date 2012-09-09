module Jekyll
  $minified_css_filename = ''
  $minified_embedded_css_filename = ''
  
  # use this as a workaround for getting cleaned up
  # reference: https://gist.github.com/920651
  class CssMinifyFile < StaticFile
    def write(dest)
      # do nothing
    end
  end

  # minify css files
  class CssMinifyGenerator < Generator
    safe true

    def generate(site)
      config = Jekyll::CssMinifyGenerator.get_config

      files_to_minify = config['files'] || get_css_files(site, config['css_source'])

      last_modified = files_to_minify.reduce( Time.at(0) ) do |latest,filepath|
        modified = File.mtime(filepath)
        modified > latest ? modified : latest
      end
      # reset the minified filename
      $minified_css_filename = last_modified.strftime("%Y%m%d%H%M")
      $minified_embedded_css_filename = $minified_css_filename
      
      output_dir = File.join(site.config['destination'], config['css_destination'])
      output_file = File.join(output_dir, $minified_css_filename)

      # need to create destination dir if it doesn't exist
      FileUtils.mkdir_p(output_dir)
      
      minify_css(files_to_minify, output_file, site.source, site)
      
      #add to the static files collection so they won't be cleaned up after site generation
      site.static_files << CssMinifyFile.new(site, site.source, config['css_destination'], $minified_css_filename + '.min.css')
      site.static_files << CssMinifyFile.new(site, site.source, config['css_destination'], $minified_embedded_css_filename + '-embed.min.css')
    end

    # read the css dir for the css files to compile
    def get_css_files(site, relative_dir)
      # not sure if we need to do this, but keep track of the current dir
      pwd = Dir.pwd
      Dir.chdir(File.join(site.config['source'], relative_dir))
      # read css files
      css_files = Dir.glob('*.css').map{ |f| File.join(relative_dir, f) }
      Dir.chdir(pwd)

      return css_files
    end

    def minify_css(css_files, output_file, source, site)
      min_file = output_file + ".min.css"
      embed_file = output_file + "-embed.min.css"
      
      css_files = css_files.join(' ')
      juice_cmd = "juicer merge -f #{css_files} -o #{min_file} -d #{source} "
      puts juice_cmd
      system(juice_cmd)
      
      #let's open that file and replace all the paths so they're relative to site.root
      contents = File.read(min_file)
      replaced = contents.gsub(/url\('\//, "url('" + site.config["root"])
      replaced = replaced.gsub(/url\(\//, "url(" + site.config["root"])
      
      File.open(min_file, "w") {|file| file.puts replaced}
      
      juice_cmd = "juicer merge -f #{css_files} -o #{embed_file} -d #{source} --embed-images data_uri"
      puts juice_cmd
      system(juice_cmd)
      
      #better do it for the embed version as well for files that didn't embed due to size, etc
      contents = File.read(embed_file)
      replaced = contents.gsub(/url\('\//, "url('" + site.config["root"])
      replaced = replaced.gsub(/url\(\//, "url(" + site.config["root"])
      File.open(embed_file, "w") {|file| file.puts replaced}
    end

    # Load configuration from CssMinify.yml
    def self.get_config
      if @config == nil
        @config = {
          'css_source' => 'stylesheets', # relative to the route
          'css_destination' => '/stylesheets' # relative to site.config['destination']
        }
        config = YAML.load_file('CssMinify.yml') rescue nil
        if config.is_a?(Hash)
          @config = @config.merge(config)
        end
      end

      return @config
    end
  end

  class CssMinifyLinkTag < Liquid::Tag
    def initialize(tag_name, text, tokens)
      super
    end

    def render(context)
      config = Jekyll::CssMinifyGenerator.get_config
      File.join(config['css_destination'], $minified_css_filename + '.min.css')
    end
  end
  
  class CssMinifyEmbedLinkTag < Liquid::Tag
    def initialize(tag_name, text, tokens)
      super
    end

    def render(context)
      config = Jekyll::CssMinifyGenerator.get_config
      File.join(config['css_destination'], $minified_embedded_css_filename + '-embed.min.css')
    end
  end
end

Liquid::Template.register_tag('minified_css_file', Jekyll::CssMinifyLinkTag)
Liquid::Template.register_tag('minified_embedded_css_file', Jekyll::CssMinifyEmbedLinkTag)