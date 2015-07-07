module Jekyll
  class Apiv3RequestHeader < Liquid::Block
    def initialize(tag_name, markup, tokens)
      super
    end

    def render(context)
      data = super

      output = <<HTML
      Request Header<br/>{% codeblock %}#{data}{% endcodeblock %}
HTML
      return Liquid::Template.parse(output).render context
    end
  end
end

Liquid::Template.register_tag('apiv3requestheader', Jekyll::Apiv3RequestHeader)
