require 'json'

module Jekyll
  class Apiv3RequestBody < Liquid::Block
    def initialize(tag_name, markup, tokens)
      super
    end

    def render(context)

      data = super

      if data.include? "="
        data = Hash[URI.decode_www_form(data)]
        data = unquote_data(data)
        data = data.length > 0 ? JSON.pretty_generate(data) : ""
      else
        data = data.length > 0 ? JSON.pretty_generate(JSON.parse(data)) : ""
      end

      output = <<HTML
      Request Body<br/>{% codeblock lang:json %}#{data}{% endcodeblock %}
HTML
      return Liquid::Template.parse(output).render context
    end
  end
end

Liquid::Template.register_tag('apiv3requestbody', Jekyll::Apiv3RequestBody)
