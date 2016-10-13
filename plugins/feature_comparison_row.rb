#require 'kramdown'

module Jekyll
  class table < Liquid::Tag
    def initialize(tag_name, markup, tokens)
      parameters = markup.shellsplit

      super
    end

    def render(context)
output=<<HTML

HTML

      #html = Kramdown::Document.new(output).to_html
      return Liquid::Template.parse(output).render context
    end
  end
end

Liquid::Template.register_tag('feature_comparison_table', Jekyll::APITableParams)
