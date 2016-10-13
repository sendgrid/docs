#require 'kramdown'

module Jekyll
  class table < Liquid::Block
    def initialize(tag_name, markup, tokens)
      @identifier = markup

      super
    end

    def render(context)
      output = super
      output = <<HTML
<table class="feature_comparison">
  <tbody>
    <tr>
      <th>Legacy Newsletter</th>
      <th>Marketing Campaigns</th>
      <td class="details-caret"><img src="/images/caret.svg"></td>
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

Liquid::Template.register_tag('feature_comparison', Jekyll::APITable)
