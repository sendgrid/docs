#require 'kramdown'
module Jekyll
  class APIErrorTable < Liquid::Block
    def initialize(tag_name, markup, tokens)
      parameters = markup.shellsplit
      @name = parameters[0]
      @description = parameters[1]
      @identifier = @name.gsub(".","_")
      @tag = parameters[2]
      super
    end
    def render(context)
      output = super
      output = <<HTML
{% anchor h3 #{@tag}%}#{@name}{% endanchor %}
#{@description}
<table class="apitable" name="#{@identifier}">
  <tbody>
    <tr>
      <th colspan="1">Error Code</th>
      <th class="details-header">Error Message</th>
      <th>Details</th>
      <th></th>
    </tr>
    #{output}
  </tbody>
</table>
HTML
      #html = Kramdown::Document.new(output).to_html
      return Liquid::Template.parse(output).render context
    end
  end
end
Liquid::Template.register_tag('api_error_table', Jekyll::APIErrorTable)
