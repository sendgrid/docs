require 'kramdown'

module Jekyll
  class InfoBlock < Liquid::Block
    def initialize(tag_name, markup, tokens)
      super
    end

    def render(context)
      contents = super
      source = '<div class="callout callout-info">'
      source += "#{Kramdown::Document.new(contents).to_html}"
      source += '</div>'
      
      source
    end
  end

  class WarningBlock < Liquid::Block
    def initialize(tag_name, markup, tokens)
      super
    end

    def render(context)
      contents = super
      source = '<div class="callout callout-warning">'
      source += "#{Kramdown::Document.new(contents).to_html}"
      source += '</div>'

      source
    end
  end
  
   class DeveloperBlock < Liquid::Block
    def initialize(tag_name, markup, tokens)
      super
    end

    def render(context)
      contents = super
      source = '<div class="callout callout-developer">'
      source += "#{Kramdown::Document.new(contents).to_html}"
      source += '</div>'

      source
    end
  end

  class GithubBlock < Liquid::Block
    def initialize(tag_name, markup, tokens)
      args = markup.split(/\s+/)
      @path = args[0]
      @lang = args[1]

      info = @path.match(/^([\w\-.%]+?)\/([\w\-.%]+)(.+)$/)
      @author = info[1]
      @name = info[2]
      super
    end

    def render(context)
      contents = super
      source = '<div class="callout callout-github" itemscope itemtype="http://schema.org/Code">'
      source += contents
      if @name
        source += '<meta itemprop="name" content="' + @name + '">'
      end
      if @author
        source += '<meta itemprop="author" content="' + @author + '">'
      end
      if @lang
        source += '<meta itemprop="programmingLanguage" content="' + @lang + '">'
      end
      url = 'https://github.com/' + @path
      source += '<meta itemprop="codeRepository" content="' + url + '">'
      source += '<p class="link"><a href="' + url + '">View on Github &raquo;</a></p>'
      source += '</div>'
      
      source
    end
  end
end

Liquid::Template.register_tag('warning', Jekyll::WarningBlock)
Liquid::Template.register_tag('info', Jekyll::InfoBlock)
Liquid::Template.register_tag('github', Jekyll::GithubBlock)
