require 'digest/md5'
require 'open-uri'

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
      
      #can we sort the dirs by some sort of weight value?
      
      @dirs.each do |path, data|
        current	 = tree
        path.split("/").inject("") do |sub_path,dir|
          sub_path = File.join(sub_path, dir)
          
          current[sub_path] ||= {}
          current	 = current[sub_path]
          sub_path
        end
      end

      puts "generating nav tree for #{@page_url}"
      files_first_traverse "", tree
    end
	  
    def files_first_traverse(prefix, node = {})
      output = ""
      output += "#{prefix}<ul id=\"nav-menu\" class=\"nav nav-list\">" 
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
          
          output += "#{prefix}	 <li class=#{li_class}><a href=\"#{URI::encode base}\">#{name}</a></li>" if subtree.empty?
      end
      
      node_list.each do |base, subtree|
        next if subtree.empty?
          
          show_link = true
          href = base
          name = base[1..-1]
          if name.index('.') != nil
            is_parent = false
            name = @dirs[name]["title"] || name
          else
            is_parent = true
            href = base + '/index.html'
            if name.index('/')
              name = name[name.rindex('/')+1..-1]
            end
          end
          
          li_class = ""
          
          if @page_url.index(base)
            list_class = "collapsibleListClosed"
          end
          
          if href == @page_url
            li_class = "active"
          end
          
          if is_parent
            id = Digest::MD5.hexdigest(base);

            li = "<li id=\"node-#{id}\" class=\"parent #{list_class}\"><div class=\"subtree-name\">#{name}</div>"
          else
            li = "<li class=\"#{li_class}\"><a href=\"#{URI::encode href}\">#{name}</a></li>"
          end
          
          output += "#{prefix}	#{li}"
          
          output += files_first_traverse(prefix + '	 ', subtree)

          if is_parent
            output+= "</li>"
          end
        end
      
        output += "#{prefix} </ul>"
        output
      end
    end
end

Liquid::Template.register_tag("navigation", Jekyll::NavTree)