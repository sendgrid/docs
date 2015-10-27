module Jekyll
  class V3ResponseListBlock < Liquid::Block

    def initialize(tag_name, markup, tokens)
      @http_response = markup

      super
    end

    def render(context)
      output = super

      data_block = '';

      output = "#{data_block}" +
  '<div class="api-example panel"><div class="panel-body">' +
  "{% codeblock lang:json %}#{@http_response}{% endcodeblock %}"+
  "#{output.strip}" +
  "</div></div>"

      return Liquid::Template.parse(output).render context
    end
  end

end

Liquid::Template.register_tag('v3responselist', Jekyll::V3ResponseListBlock)
