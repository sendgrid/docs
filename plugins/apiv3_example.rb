module Jekyll
  class ApiV3Example < Liquid::Block
    def initialize(tag_name, markup, tokens)
      attributes = markup.split
      @identifier = attributes[0]
      @request_type = attributes[1]
      @url = attributes[2]
      @data = attributes[3]

      if attributes[4]
        @show_livedoc = attributes[4]
      end

      super
    end

    def render(context)
      output = super


      output = <<HTML
<div class="api-example panel" id="apiv3example-#{@identifier}">
  #{output}
</div>
HTML

      return Liquid::Template.parse(output).render context
    end

    def render_all(list, context)
      context['identifier'] = @identifier
      context['request_type'] = @request_type
      context['url'] = @url
      context['data'] = @data
      super
    end
  end

  class V3ResponseBlock < Liquid::Block
    # Solution to unquote true, false, and numbers in JSON response
    def unquote_data(data)
      data.each do |k, v|
        if v.index("]").nil?
        else
          puts v
          data[k] = v[v.index("[")+1,v.index("]")-1].gsub! "'",""
          puts data[k]
          data[k] = data[k].split(",")
        end
        data[k] = v.to_i if /\A[-+]?\d+\z/ === v
        data[k] = true if v == "true"
        data[k] = false if v == "false"
      end
    end

    def render(context)
      output = super
 
      # let's parse the vars before we generate the output to avoid complications
      identifier = Liquid::Template.parse("{{ identifier }}").render context
      request_type = Liquid::Template.parse("{{ request_type }}").render context
      url = Liquid::Template.parse("{{ url }}").render context
      data = Liquid::Template.parse("{{ data }}").render context

      data = Hash[URI.decode_www_form(data)]
      data = unquote_data(data)
      data = data.length > 0 ? JSON.pretty_generate(data) : ""

      if data.length > 0
        data_block = "Request Body<br/>{% codeblock lang:json %}#{data}{% endcodeblock %}"
      end      
      request_url = url

      output = <<HTML
<div class="panel-body">
  <h3>Request</h3>
  {% codeblock lang:http %}#{request_type} #{request_url} HTTP/1.1{% endcodeblock %}
  #{data_block} 
  <h3>Response</h3>
  {% codeblock lang:json %}#{output.strip}{% endcodeblock %}
</div>
HTML
      
      return Liquid::Template.parse(output).render context
    end
  end
end

Liquid::Template.register_tag('v3response', Jekyll::V3ResponseBlock)
Liquid::Template.register_tag('apiv3example', Jekyll::ApiV3Example)
