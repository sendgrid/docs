module Jekyll
	# Add accessor for directory
	class Page
		attr_reader :dir
	end
	
	class NavTree < Jekyll::Generator
    def generate(site)
      dirs = {}
      tree = {}

      site.pages.each do |page|
        # exclude all pages that are hidden in front-matter
        if page.data["navigation"]["show"] != false
          relative = page.dir[1..-1] ||""
          path = relative + page.url
          puts path
          path = path.index('/')==0 ? path[1..-1] : path
          puts path
          dirs[path] = page.data
        end
      end
      dirs.each do |path, data|
        current	 = tree
        path.split("/").inject("") do |sub_path,dir|
          puts sub_path
          sub_path = File.join(sub_path, dir)
          current[sub_path] ||= {}
          current	 = current[sub_path]
          sub_path
        end
      end

      site.config["navigation"] = files_first_traverse "", tree
    end
	  
    def files_first_traverse(prefix, node = {})
      output = ""
      output += "#{prefix}<ul class=\"nav nav-list\">" 
      node_list = node.sort
      
      node_list.each do |base, subtree|
          name = base[1..-1]
          output += "#{prefix}	 <li><a href=>#{name}</a></li>" if subtree.empty?
      end
      
      node_list.each do |base, subtree|
        next if subtree.empty?
          name = base[1..-1]
          output += "#{prefix}	 <li><a href=>#{name}</a></li>"
          output += files_first_traverse(prefix + '	 ', subtree)
        end
      
        output += "#{prefix} </ul>"
        output
      end
    end
end