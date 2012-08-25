module Jekyll
	# Add accessor for directory
	class Page
		attr_reader :dir
	end
	
	class BreadCrumbs < Liquid::Tag
    def render(context)
      site = context.registers[:site]
      @page_url = context.environments.first["page"]["url"]
      
      @dirs = {}

      site.pages.each do |page|
        # exclude all pages that are hidden in front-matter
        if page.data["navigation"]["show"] != false
          relative = page.dir[1..-1] ||""
          path = relative + page.url
          path = path.index('/')==0 ? path[1..-1] : path
          @dirs[path] = page.data
        end
      end
      
      output="<ul class=\"breadcrumb\">"
      
      levels = @page_url.split('/') #break up url into different levels
      levels.each_with_index do |level, index|
        unless level.empty?
          if index == levels.size-1 || 
             (level == levels[levels.size-2] && levels[levels.size-1].to_i > 0)
            path = @page_url[1..-1]
            path = @dirs[path]["title"] || path
            output += "<li>#{path}</li>" unless level.to_i > 0
          else
              link = "/"
              i = 1
              while i <= index
                link += "#{levels[i]}/"
                i+=1
              end
              output += "<li><a href=\"#{link}\">#{level.gsub(/_/, ' ')}</a><span class=\"divider\">/</span></li>"
          end
        end
      end
      
      output += "</ul>"
      puts "generating breadcrumbs for #{@page_url}"
      output
    end
	end
end

Liquid::Template.register_tag("breadcrumbs", Jekyll::BreadCrumbs)