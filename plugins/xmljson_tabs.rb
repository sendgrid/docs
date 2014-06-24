module Jekyll

  class XmlJsonTabsTag < Liquid::Tag
    @img = nil

    def initialize(tag_name, markup, tokens)
      @methodname = markup.strip 
      super
    end

    def render(context)
      #wondering what this syntax is? google "here document"
<<HTML
  <ul class="nav nav-tabs">
      <li class="active">
          <a name="#{@methodname}-json" href="##{@methodname}-json" data-toggle="tab">JSON</a>
      </li>
      <li>
          <a name="#{@methodname}-xml" href="##{@methodname}-xml" data-toggle="tab">XML</a>
      </li>
  </ul>
HTML
    end
  end
end

Liquid::Template.register_tag('xmljsontabs', Jekyll::XmlJsonTabsTag)
