require 'open-uri'

module Jekyll
	# Add accessor for directory
	class Page
		attr_reader :dir
	end
	
	class BreadCrumbs < Liquid::Tag
    def render(context)
      site = context.registers[:site]
      page = context.registers[:page]
      @page_url = context.environments.first["page"]["url"]
      @dirs = {}

      site.pages.each do |site_page|
        path = site_page.url
        path = path.index('/')==0 ? path[1..-1] : path
        @dirs[path] = site_page.data
      end
      
      output='<div class="breadcrumb-pane clearfix"><ul class="breadcrumb">'
      
      output+='<li itemscope itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/index.html" itemprop="url"><span itemprop="title">Documentation</span></a></li>'
      
      levels = @page_url.split('/') #break up url into different levels
      levels.each_with_index do |level, index|
        unless level.empty?
          if index == levels.size-1 || 
             (level == levels[levels.size-2] && levels[levels.size-1].to_i > 0)
            path = @page_url[1..-1]
            if  @dirs[path]["navigation"]["show"] == true
              path = @dirs[path]["title"] || path
              output += "<li itemscope itemtype=\"http://data-vocabulary.org/Breadcrumb\"><span itemprop=\"title\">#{path}</span><meta itemprop=\"url\" content=\"#{site.config['url']}#{@page_url}\" /></li>" unless level.to_i > 0
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
              output += "<li itemscope itemtype=\"http://data-vocabulary.org/Breadcrumb\">#{inner}</li>"
          end
        end
      end
      
      output += "</ul>"
      output += "<a class=\"edit-link\" href=\"https://github.com/sendgrid/docs/blob/develop/source/#{page['path']}\"><span class=\"icon-edit\"></span> View and Edit</a>"
      output += "</div>"
      puts "generating breadcrumbs for #{@page_url}"
      output
    end
	end
end

Liquid::Template.register_tag("breadcrumbs", Jekyll::BreadCrumbs)
