module Jekyll
  class ApiV3Example < Liquid::Block
    def initialize(tag_name, markup, tokens)

      attributes = markup.split

      @identifier = attributes[0]
      @request_type = attributes[1]
      @url = attributes[2]

      #clean the original attributes from the original content
      markup = markup.gsub(@identifier,"").gsub(@request_type,"").gsub(@url,"")

      #get the data - which is "request data" and "request headers" if they exist
      @data, @request_header = markup.scan(/\{(.*?)\}/)

      unless @data.nil?
        #hack it back together now
        @data = "{"+@data[0].to_s+"}"
        markup = markup.gsub("{"+@data[0].to_s+"}", "")
        if @data == "{}"
          @data = ""
        end
      end

      unless @request_header.nil?
        @request_header = @request_header[0]
        markup = markup.gsub("{"+@request_header.to_s+"}", "")

        if @request_header.include? "request_header"
          @request_header = @request_header.gsub("request_header","")
        else
          #this isn't a request header and it's out of order
          @data = "{"+@request_header.to_s+"}"
          @request_header = ""
        end
      end

      if markup.strip.length > 0
        @show_livedoc = markup
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
      context['data'] = @data.to_s
      context['request_header'] = @request_header.to_s
      super
    end
  end

  class V3ResponseBlock < Liquid::Block
    # Solution to unquote true, false, and numbers in JSON response
    def unquote_data(data)
      data.each do |k, v|
        unless v.index("]").nil?
          data[k] = v[v.index("[") + 1, v.index("]") - 1].gsub!("'", "")
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
      request_header = Liquid::Template.parse("{{ request_header }}").render context
      data = Liquid::Template.parse("{{ data }}").render context

      data_block = '';

      if data.include? "="
        data = Hash[URI.decode_www_form(data)]
        data = unquote_data(data)
        data = data.length > 0 ? JSON.pretty_generate(data) : ""
      else
        data = data.length > 0 ? JSON.pretty_generate(JSON.parse(data)) : ""
      end

      if request_header.length > 0
        request_header = request_header.gsub('-_-',"")
        data_block = "Request Headers<br/>{% codeblock %}#{request_header}{% endcodeblock %}"
      end

      if data.length > 0
        data_block += "Request Body<br/>{% codeblock lang:json %}#{data}{% endcodeblock %}"
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
