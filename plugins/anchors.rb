#Generates a named anchor and wrapping tag from a string.

module Jekyll
  class AnchorBlock < Liquid::Block
    def initialize(tag_name, markup, tokens)
      attributes = markup.split
      @tag = attributes[0]
      @name = attributes[1] || false
      super
    end

    def render(context)
      contents = super

      # pipe param through liquid to make additional replacements possible
      content = Liquid::Template.parse(contents).render context

      # if the anchor has a defined name, use that, otherwise make one up
      if @name
        safeContent = @name
      else
        #strip out special chars and replace spaces with hyphens
        safeContent = content.rstrip.gsub(/[^\w\s]/,'').gsub(/[\s]/,'-')
      end

      output = "<#{@tag} class=\"anchor-wrap\"><a name=\"#{safeContent}\" class=\"anchor\" href=\"##{safeContent}\">"
      output += '<span class="anchor-icon"><i class="icon-link"></i></span></a>'
      output += content.strip
      output += "</#{@tag}>"

      output
    end
  end
end

Liquid::Template.register_tag("anchor", Jekyll::AnchorBlock)

