module Jekyll
  class InfoTag < Liquid::Tag
    def initialize(tag_name, markup, tokens)
      @markup = markup
      super
    end

    def render(context)
      output = super
      source = '<blockquote><span class="label label-info">Info</span> '
      source += @markup
      source += '</blockquote>'
    end
  end

  class WarningTag < Liquid::Tag
    def initialize(tag_name, markup, tokens)
      @markup = markup
      super
    end

    def render(context)
      output = super
      source = '<blockquote><span class="label label-warning">Warning</span> '
      source += @markup
      source += '</blockquote>'
    end
  end
end

Liquid::Template.register_tag('warning', Jekyll::WarningTag)
Liquid::Template.register_tag('info', Jekyll::InfoTag)
