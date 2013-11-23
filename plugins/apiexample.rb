module Jekyll
  class ApiExample < Liquid::Block
    def initialize(tag_name, markup, tokens)
      attributes = markup.split
      @identifier = attributes[0]
      @request_type = attributes[1]
      @url = attributes[2]
      @data = attributes[3]

      super
    end

    def render(context)
      output = super
      output = <<-HTML
        {% xmljsontabs #{@identifier}%}
        <div class="tab-content">
        #{output}
        </div>
      HTML

      return Liquid::Template.parse(output).render context
    end

    def render_all(list, context)
      puts @http_method
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

      output = <<-HTML
        <div class="tab-pane #{active}" id="#{identifier}-#{@format}">
          <h3>Call</h3>
          {% requestblock %}
            {% requesturl #{request_type} %}#{url}.#{@format}{% endrequesturl %}
            {% requestdata data #{request_type} %}#{data}{% endrequestdata %}
          {% endrequestblock %}

          <h3>Response</h3>
          {% codeblock lang:#{@format} %}
#{output}
          {% endcodeblock %}
        </div>
      HTML
      
      return Liquid::Template.parse(output).render context
    end
  end
end

Liquid::Template.register_tag('response', Jekyll::ResponseBlock)
Liquid::Template.register_tag('apiexample', Jekyll::ApiExample)
