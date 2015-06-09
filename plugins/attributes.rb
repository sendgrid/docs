require 'kramdown'

module Jekyll
  class Attributes < Liquid::Block
    def initialize(tag_name, markup, tokens)
      @identifier = markup

      super
    end

    def render(context)
      output = super
      output = <<HTML
<table id="parameters-#{@identifier.strip}" class="table table-bordered table-striped">
  <tbody>
    <tr>
      <th>Request Attribute</th>
      <th>Required</th>
      <th>Requirements</th>
      <th>Description</th>
    </tr>
    #{output}
  </tbody>
</table>
HTML
      html = Kramdown::Document.new(output).to_html
      return Liquid::Template.parse(html).render context
    end
  end
end

Liquid::Template.register_tag('attributes', Jekyll::Attributes)
