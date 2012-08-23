module Jekyll
	# Add accessor for directory
	class Page
		attr_reader :dir
	end
	
	class NavTree < Liquid::Tag
    def render(context)
      site = context.registers[:site]
      @page_url = context.environments.first["page"]["url"]
      
      @dirs = {}
      tree = {}

      site.pages.each do |page|
        # exclude all pages that are hidden in front-matter
        if page.data["navigation"]["show"] != false
          relative = page.dir[1..-1] ||""
          path = relative + page.url
          path = path.index('/')==0 ? path[1..-1] : path
          @dirs[path] = page.data
        end
      end
      @dirs.each do |path, data|
        current	 = tree
        path.split("/").inject("") do |sub_path,dir|
          sub_path = File.join(sub_path, dir)
          
          current[sub_path] ||= {}
          current	 = current[sub_path]
          sub_path
        end
      end

      files_first_traverse "", tree
    end
	  
    def files_first_traverse(prefix, node = {})
      output = ""
      output += "#{prefix}<ul class=\"nav nav-list\">" 
      node_list = node.sort
      
      node_list.each do |base, subtree|
          name = base[1..-1]
          if name.index('.') != nil
            name = @dirs[name]["title"] || name
          end
          
          li_class = ""
          if base == @page_url 
            li_class = "active"
          end
          
          output += "#{prefix}	 <li class=#{li_class}><a href=\"#{base}\">#{name}</a></li>" if subtree.empty?
      end
      
      node_list.each do |base, subtree|
        next if subtree.empty?
          href = base
          name = base[1..-1]
          if name.index('.') != nil
            name = @dirs[name]["title"] || name
          else
            href = href + "/index.html"
          end
          
          li_class = ""
          if href == @page_url 
            li_class = "active"
          end
          
          output += "#{prefix}	 <li class=#{li_class}><a href=\"#{href}\">#{name}</a></li>"
          output += files_first_traverse(prefix + '	 ', subtree)
        end
      
        output += "#{prefix} </ul>"
        output
      end
    end
end

Liquid::Template.register_tag("navigation", Jekyll::NavTree)