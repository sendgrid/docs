module Jekyll
  class InfoBlock < Liquid::Block
    def initialize(tag_name, markup, tokens)
      super
      @markup = markup
    end

    def render(context)
      source = '<blockquote><span class="label label-info">Info</span> '
      source += @markup
      source += '</blockquote>'
      
      source
    end
  end

  class WarningBlock < Liquid::Block
    def initialize(tag_name, markup, tokens)
      super
      @markup = markup
    end

    def render(context)
      source = '<blockquote><span class="label label-warning">Warning</span> '
      source += @markup
      source += '</blockquote>'

      source
    end
  end
end

Liquid::Template.register_tag('warning', Jekyll::WarningBlock)
Liquid::Template.register_tag('info', Jekyll::InfoBlock)
