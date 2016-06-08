#
# Author: Matt Bernier
# Make a bootstrap row
#
# Outputs the HTML for a bootstrap row with id "best_row"
#
#   {% html_row md-4 best_row %}
#   Wheeee!
#   {% endhtml_row %}
#   ...
#   <div id="best_row" class="row">
#     Wheeee!
#   </div>
#
# Use with html_column to output a proper bootstrap row and column pairing
#
#   {% html_row md-4 best_row %}
#       {% html_column md-4 best_column %}
#         Some content
#       {% endhtml_column %}
#       {% html_column md-4 best_column2 %}
#         Some content
#       {% endhtml_column %}
#       {% html_column md-4 best_column3 %}
#         Some content
#       {% endhtml_column %}
#   {% endhtml_row %}
#   ...
#   <div id="best_row" class="row">
#     <div id="best_column" class="col-md-4">
#         <p>Some content</p>
#     </div>
#     <div id="best_column2" class="col-md-4">
#         <p>Some content</p>
#     </div>
#     <div id="best_column3" class="col-md-4">
#         <p>Some content</p>
#     </div>
#   </div>
#
module Jekyll

  class Bootstrap_Row < Liquid::Block

    def initialize(tag_name, markup, tokens)
      parameters = markup.shellsplit

      @class = defined?(parameters[0]) ? " #{parameters[1]}" : ""

      @id = defined?(parameters[1]) ? "id=\"#{parameters[0]}\"" : ""

      super
    end
    def render(context)
        output = super
output = <<HTML
<div #{@id} class="row#{@class}">#{output}</div>
HTML

        #html = Kramdown::Document.new(output).to_html
        return Liquid::Template.parse(output).render context
    end
  end
end
  Liquid::Template.register_tag('html_row', Jekyll::Bootstrap_Row)
