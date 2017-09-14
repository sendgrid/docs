#require 'kramdown'

module Jekyll
  class APITableParams < Liquid::Tag
    def initialize(tag_name, markup, tokens)
      parameters = markup.shellsplit
      @name = parameters[0]
      @type = parameters[1]
      @row_type = ""
      @required = parameters[2]
      @row_required = parameters[2] == "Yes" ? "required" : "not-required"
      @constraints = parameters[3]
      @description = parameters[4]
      @depth = defined?(parameters[5]) ? parameters[5] : 0

      if @type.include? "array"
        @row_type = "array"
      elsif @type.include? "object"
        @row_type = "object"
      elsif @type.include? "string"
        @row_type = "string"
      elsif @type.include? "number"
        @row_type = "int"
      elsif @type.include? "integer"
        @row_type = "int"
      elsif @type.include? "boolean"
        @row_type = "bool"
      end

      super
    end

    def render(context)
output=<<HTML
<tr class="depth-#{@depth} #{@row_required} details-closed" name="#{@name}">
  <td colspan="2" class="param #{@row_type}">#{@name}</td>
  <td>#{@type}</td>
  <td>#{@required}</td>
  <td>#{@constraints}</td>
  <td class="details-caret"><img src="/images/caret.svg"></td>
</tr>
<tr class="details-row">
  <td colspan="2"></td>
  <td colspan="4">#{@description}</td>
</tr>
HTML

      #html = Kramdown::Document.new(output).to_html
      return Liquid::Template.parse(output).render context
    end
  end
end

Liquid::Template.register_tag('api_table_param', Jekyll::APITableParams)
