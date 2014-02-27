module Jekyll
  class InfoBlock < Liquid::Block
    def initialize(tag_name, markup, tokens)
      super
    end

    def render(context)
      contents = super
      source = '<div class="callout callout-info">'
      source += contents
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
      source += contents
      source += '</div>'

      source
    end
  end

  class GithubBlock < Liquid::Block
    def initialize(tag_name, markup, tokens)
      @path = markup
      super
    end

    def render(context)
      contents = super
      source = '<div class="callout callout-github">'
      source += contents
      source += '<p class="link"><a href="https://github.com/' + @path + '">View on Github &raquo;</a></p>'
      source += '</div>'
      
      source
    end
  end
end

Liquid::Template.register_tag('warning', Jekyll::WarningBlock)
Liquid::Template.register_tag('info', Jekyll::InfoBlock)
Liquid::Template.register_tag('github', Jekyll::GithubBlock)
