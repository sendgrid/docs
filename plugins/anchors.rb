#Generates a named anchor and wrapping tag from a string.

module Jekyll
  class AnchorBlock < Liquid::Block
    def initialize(tag_name, markup, tokens)
      @tag = markup
      super
    end

    def render(context)
      contents = super

      # pipe param through liquid to make additional replacements possible
      content = Liquid::Template.parse(contents).render context

      #strip out special chars and replace spaces with hyphens
      safeContent = content.rstrip.gsub(/[^\w\s]/,'').gsub(/[\s]/,'-')

      #should refactor this to allow wrapping tag to be passed in
      output = "<#{@tag} class=\"anchor-wrap\"><a name=\"#{safeContent}\" class=\"anchor\" href=\"##{safeContent}\">"
      output += '<span class="anchor-icon"><i class="icon-link"></i></span></a>'
      output += content.strip
      output += "</#{@tag}>"

      output
    end
	end
end

Liquid::Template.register_tag("anchor", Jekyll::AnchorBlock)

