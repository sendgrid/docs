#require 'kramdown'
module Jekyll
  class APIErrorTableRowMessage < Liquid::Tag
    def initialize(tag_name, markup, tokens)
      parameters = markup.shellsplit
      @error_message = parameters[0]
      @description = parameters[1]
      super
    end
    def render(context)
output=<<HTML
<tr class="depth-2 details-closed">
  <td colspan="3" class="param">#{@error_message}</td>
  <td class="details-caret"><img src="/images/caret.svg"></td>
</tr>
<tr class="details-row">
  <td></td>
  <td colspan="3">#{@description}</td>
</tr>
HTML
      #html = Kramdown::Document.new(output).to_html
      return Liquid::Template.parse(output).render context
    end
  end
end
Liquid::Template.register_tag('api_error_table_message', Jekyll::APIErrorTableRowMessage)
