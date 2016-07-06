#require 'kramdown'
module Jekyll
  class APIErrorTableRow < Liquid::Tag
    def initialize(tag_name, markup, tokens)
      parameters = markup.shellsplit
      @error_code = parameters[0]
      @temp_error_code = Integer(@error_code)
      if (@temp_error_code >= 200)
        if (@temp_error_code >= 400)
          if (@temp_error_code >= 500)
            @error_code_css = 500
          else
            @error_code_css = 400
          end
        else
          @error_code_css = 200
        end
      end
      super
    end
    def render(context)
output=<<HTML
<tr class="depth-1">
  <td colspan="2"" class="param status-#{@error_code_css}">#{@error_code}</td>
  <td></td><td></td>
</tr>
  #{output}
HTML
      #html = Kramdown::Document.new(output).to_html
      return Liquid::Template.parse(output).render context
    end
  end
end
Liquid::Template.register_tag('api_error_table_row', Jekyll::APIErrorTableRow)
