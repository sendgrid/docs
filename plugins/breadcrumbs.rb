require 'open-uri'

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
        path = page.url
        path = path.index('/')==0 ? path[1..-1] : path
        @dirs[path] = page.data
      end
      
      output='<ul class="breadcrumb">'
      
      output+='<li itemscope itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/index.html" itemprop="url"><span itemprop="title">Documentation</span></a><span class="divider">/</span></li>'
      
      levels = @page_url.split('/') #break up url into different levels
      levels.each_with_index do |level, index|
        unless level.empty?
          if index == levels.size-1 || 
             (level == levels[levels.size-2] && levels[levels.size-1].to_i > 0)
            path = @page_url[1..-1]
            if  @dirs[path]["navigation"]["show"] == true
              path = @dirs[path]["title"] || path
              output += "<li itemscope itemtype=\"http://data-vocabulary.org/Breadcrumb\"><span itemprop=\"title\">#{path}</span><meta itemprop=\"url\" content=\"#{@page_url}\" /></li>" unless level.to_i > 0
            end
          else
              link = "/"
              i = 1
              while i <= index
                link += "#{URI::encode levels[i]}/"
                i+=1
              end
              
              if !link.index('.')
                
                path = Pathname.new(site.source + link + 'index.html')
                if path.exist?
                  link = link + 'index.html'
                else
                  link = ""
                end
               end
              
              inner = link.length > 0 ? "<a href=\"#{link}\" itemprop=\"url\"><span itemprop=\"title\">#{level.gsub(/_/, ' ')}</span></a>" : "#{level.gsub(/_/, ' ')}"
              output += "<li itemscope itemtype=\"http://data-vocabulary.org/Breadcrumb\">#{inner}<span class=\"divider\">/</span></li>"
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
