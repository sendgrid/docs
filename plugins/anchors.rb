#Generates a named anchor and wrapping H2 from a string.

module Jekyll
	class Anchor < Liquid::Tag

    def initialize(tag_name, text, tokens)
      super
       @text = text
    end

    def render(context)
      # pipe param through liquid to make additional replacements possible
      content = Liquid::Template.parse(@text).render context

      #strip out special chars and replace spaces with hyphens
      safeContent = content.rstrip.gsub(/[^\w\s]/,'').gsub(/[\s]/,'-')

      #should refactor this to allow wrapping tag to be passed in
      output = "<h2 class=\"anchor-wrap\"><a name=\"#{safeContent}\" class=\"anchor\" href=\"##{safeContent}\">"
      output += '<span class="anchor-icon"><i class="icon-share"></i></span></a>'
      output += content
      output += '</h2>'

      output
    end
	end
end

Liquid::Template.register_tag("anchor", Jekyll::Anchor)

