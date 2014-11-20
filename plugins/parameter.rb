require 'kramdown'

module Jekyll
  class ParameterTag < Liquid::Tag
    def initialize(tag_name, markup, tokens)
      parameters = markup.shellsplit
      @name = parameters[0]
      @required = parameters[1]
      @requirements = parameters[2]
      @description = parameters[3]

      super
    end

    def render(context)
output=<<HTML
<tr>
  <td markdown="span">#{@name}</td>
  <td markdown="span">#{@required}</td>
  <td markdown="span">#{@requirements}</td>
  <td markdown="span">#{@description}</td>
</tr>
HTML

      html = Kramdown::Document.new(output).to_html
      return Liquid::Template.parse(html).render context
    end
  end
end

Liquid::Template.register_tag('parameter', Jekyll::ParameterTag)
