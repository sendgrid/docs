#
# Author: Nick Quinlan
#
# Outputs request blocks, describing GET/POST Requests and their data
#
#   {% requestblock %}
#     {% requesturl POST %}
#          https://api.sendgrid.com/api/mail.send.json
#     {% endrequesturl %}
#     {% requestdata data POST %}
#         api_user=your_sendgrid_username&api_key=your_sendgrid_password
#     {% endrequestdata %}
#   {% endrequestblock %}
#
#   ...will output...
#
#    <table class="table table-bordered request-block">
#      <tr>
#        <td>POST</td>
#        <td>
#          <code>https://api.sendgrid.com/api/mail.send.json</code>
#        </td>
#      </tr>
#      <tr>
#         <td>POST Data</td>
#         <td>
#          <code class="wrap">api_user=your_sendgrid_username&api_key=your_sendgrid_password&to=destination@example.com&toname=Destination&subject=Example_Subject&text=testingtextbody&from=info@domain.com</code>
#        </td>
#      </tr>
#    </table>
#
#
#    USAGE:
#
#   {% requestblock %}
#     {% requesturl (<METHOD>) %}
#          <URL>
#     {% endrequesturl %}
#     {% requestdata (<TYPE>) (<METHOD>) %}
#         <DATA>
#     {% endrequestdata %}
#   {% endrequestblock %}
#
#   METHOD - HTTP Verb (e.g. GET, POST, PUT...), defaults to POST
#   TYPE   - Data communication type (e.g. Headers, Data), defaults to Data
#   URL    - The url the request describes
#   DATA   - Data passed through the request, both headers and query strings will be formatted
#
#   As many {% requestdata %} blocks as necessary can be included,
#   e.g. you can make a request with no data, or data passed through both headers and query string.

module Jekyll

  class RequestBlockTag < Liquid::Block
    def initialize(tag_name, markup, tokens)

      super
    end

    def render(context)
      output = super
      return <<HTML
<table class="table table-bordered request-block">
  #{output}
</table>
HTML
    end
  end

  class RequestBlockUrl < Liquid::Block
    def initialize(tag_name, markup, tokens)
      parameters = markup.split(" ")
      if parameters[0]
        @method = parameters[0].upcase
      else
        @method = "POST"
      end
      super
    end

    def render(context)
      output = super
      output.gsub!(/^\s*(.+)\s*$/, '\1')
      return <<HTML
<tr>
  <td>#{@method}</td>
  <td>
    <code>#{output}</code>
  </td>
</tr>
HTML
    end
  end

  class RequestBlockData < Liquid::Block
    def initialize(tag_name, markup, tokens)
      parameters = markup.split(" ")
      if parameters[0]
        case parameters[0].downcase
          when "data"
            @type = "Data"
          when "headers"
            @type = "Headers"
          else
            @type = "Data"
        end
      else
        @type = "Data"
      end

      if parameters[1]
        @method = parameters[1].upcase
      else
        @method = "POST"
      end
      super
    end

    def render(context)
      output = super
      output.gsub!(/^\s*(.+)\s*$/, '\1')

      if @type == "Data"
        output.gsub!('&amp;', '&')
        output.gsub!('&', '&<wbr>')
        output.gsub!(/([^&=]+)=([^&=]+)/, '<span class="data-key">\1</span>=<span class="data-value">\2</span>')
      elsif @type == "Headers"
        output.gsub!(/^([^:]+):(.+)$/m, '<span class="data-key">\1</span>:<span class="data-value">\2</span><br />')
      end

      return <<HTML
<tr>
  <td>#{@method} #{@type}</td>
  <td>
    <code class="requestdata requestdata-#{@type.downcase}">#{output}</code>
  </td>
</tr>
HTML
    end

    def render_all(list, context)
      super
    end
  end

end

Liquid::Template.register_tag('requestblock', Jekyll::RequestBlockTag)
Liquid::Template.register_tag('requesturl', Jekyll::RequestBlockUrl)
Liquid::Template.register_tag('requestdata', Jekyll::RequestBlockData)
