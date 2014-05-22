module Jekyll
  class ApiExample < Liquid::Block
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

      livedoc = ""
      if @show_livedoc != "false"
        livedoc = "{% livedoc #{@identifier} #{@request_type} #{@url} #{@data} %}"
      end

      output = <<HTML
#{livedoc}
<div class="api-example" id="apiexample-#{@identifier}">
  {% xmljsontabs #{@identifier}%}
  <div class="tab-content">
  #{output}
  </div>
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

  class ResponseBlock < Liquid::Block
    def initialize(tag_name, markup, tokens)
      parameters = markup.split
      if parameters[0]
        @format = parameters[0].downcase
      else
        @format = "json"
      end
      super
    end

    def render(context)
      output = super

      active = @format == "json" ? "active" : ""

      #let's parse the vars before we generate the output to avoid complications
      identifier = Liquid::Template.parse("{{ identifier }}").render context
      request_type = Liquid::Template.parse("{{ request_type }}").render context
      url = Liquid::Template.parse("{{ url }}").render context
      data = Liquid::Template.parse("{{ data }}").render context

      request_url = request_type.upcase != "GET" ? "#{url}.#{@format}" : "#{url}.#{@format}?#{data}"
      requestdata_block = request_type.upcase != "GET" ? "{% requestdata data #{request_type} %}#{data}{% endrequestdata %}" : ""

      output = <<HTML
<div class="tab-pane #{active}" id="#{identifier}-#{@format}">
  <h3>Call</h3>
  {% requestblock %}
    {% requesturl #{request_type} %}#{request_url}{% endrequesturl %}
    #{requestdata_block}
  {% endrequestblock %}
  
  <h3>Response</h3>
  {% codeblock lang:#{@format} %}#{output.strip}{% endcodeblock %}
</div>
HTML
      
      return Liquid::Template.parse(output).render context
    end
  end
end

Liquid::Template.register_tag('response', Jekyll::ResponseBlock)
Liquid::Template.register_tag('apiexample', Jekyll::ApiExample)
