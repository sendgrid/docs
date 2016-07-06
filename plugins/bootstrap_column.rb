#
# Author: Matt Bernier
# Make a bootstrap column
#
# Outputs the HTML for a bootstrap column of size 4 with id "best_column"
#
  # {% html_column md-4 best_column %}
  # Some content
  # {% endhtml_column %}
#   ...
# <div id="best_column" class="col-md-4">
#   <p>Some content</p>
# </div>
#
module Jekyll

  class Bootstrap_Column < Liquid::Block

    def initialize(tag_name, markup, tokens)
      parameters = markup.shellsplit

      @size = "col-#{parameters[0]}"

      @class = defined?(parameters[1]) ? " #{parameters[1]}" : ""

      @id = parameters[2];

      if defined?(parameters[2].to_str)
        if !empty?(parameters[2].to_str)
          @id = "id=\"#{parameters[2]}\""
        end
      end


      super
    end
    def render(context)
        output = super
output = <<HTML
<div #{@id} class="#{@size}#{@class}"><p>#{output}</p></div>
HTML

        #html = Kramdown::Document.new(output).to_html
        return Liquid::Template.parse(output).render context
    end
  end
end
  Liquid::Template.register_tag('html_column', Jekyll::Bootstrap_Column)
