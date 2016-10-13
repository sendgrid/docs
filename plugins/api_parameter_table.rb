#require 'kramdown'

module Jekyll
  class APITable < Liquid::Block
    def initialize(tag_name, markup, tokens)
      @identifier = markup

      super
    end

    def render(context)
      output = super
      output = <<HTML
<table class="apitable">
  <tbody>
    <tr>
      <th colspan="2">JSON Parameter</th>
      <th>Type</th>
      <th>Required</th>
      <th>Limitations</th>
      <th class="details-header">Details</th>
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

Liquid::Template.register_tag('api_table', Jekyll::APITable)
