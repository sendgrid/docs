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
      <<-HTML
      <tr>
        <td>#{@name}</td>
        <td>#{@required}</td>
        <td>#{@requirements}</td>
        <td>#{@description}</td>
      </tr>
      HTML
    end
  end
end

Liquid::Template.register_tag('parameter', Jekyll::ParameterTag)
