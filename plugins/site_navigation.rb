module Jekyll
	# Add accessor for directory
	class Page
		attr_reader :dir
	end
	
	class NavTree < Jekyll::Generator
    def generate(site)
      dirs = Array.new
      tree = {}

      site.pages.each do |page|
        dirs.push(page.dir + page.url)
      end

      dirs.each do |path|
        current	 = tree
        path.split("/").inject("") do |sub_path,dir|
          sub_path = File.join(sub_path, dir)
          current[sub_path] ||= {}
          current	 = current[sub_path]
          sub_path
        end
      end

      site.config["navigation"] = files_first_traverse "", tree
    end
	
    def print_tree(prefix, node)
      puts "#{prefix}<ul class=\"nav nav-list\">"
      node.each_pair do |path, subtree| 
        puts "#{prefix}	 <li>[#{path[1..-1]}] #{File.basename(path)}</li>"		
        print_tree(prefix + "	 ", subtree) unless subtree.empty?
      end
      puts "#{prefix}</ul>"
    end
	
	  
    def files_first_traverse(prefix, node = {})
      output = ""
      output += "#{prefix}<ul class=\"nav nav-list\">" 
      node_list = node.sort
      
      node_list.each do |base, subtree|
        output += "#{prefix}	 <li>#{base}</li>" if subtree.empty?
      end
      
      node_list.each do |base, subtree|
        next if subtree.empty?
          output += "#{prefix}	 <li>#{base}</li>"
          output += files_first_traverse(prefix + '	 ', subtree)
        end
      
        output += "#{prefix} </ul>"
        output
      end

    end
end