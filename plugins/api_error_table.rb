#require 'kramdown'

module Jekyll
  class APIErrorTable < Liquid::Block
    def initialize(tag_name, markup, tokens)
      parameters = markup.shellsplit
      @name = parameters[0]
      @identifier = @name.gsub(".","_")
      super
    end

    def render(context)
      output = super
      output = <<HTML
<h2>#{@name}</h2>
<table name="#{@identifier}" class="apitable">
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
