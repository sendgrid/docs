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
			@folder_names = site.data['folder_names']
      @folder_weights = site.data['folder_weights']
      @folder_icons = site.data['folder_icons']["icons"]
      @nodes = {}
      tree = {}
      sorted_tree = {}

      site.pages.each do |page|
        # exclude all pages that are hidden in front-matter
        if page.data["navigation"]["show"] != false
          path = page.url
          path = path.index('/')==0 ? path[1..-1] : path
          @nodes[path] = page.data
        end
      end

      #let's sort the pages by weight
      array = []
      @nodes.each do |path, data|
        array.push(:path => path, :weight => data["weight"], :title => data["title"])
      end

      sorted_nodes = array.sort_by {|h| [-(h[:weight]||0), h[:path] ]}

      sorted_nodes.each do |node|
        current	 = tree
        node[:path].split("/").inject("") do |sub_path,dir|

          sub_path = File.join(sub_path, dir)

          current[sub_path] ||= {}
          current	 = current[sub_path]
          sub_path
        end
      end

      tree.each do |base, subtree|
        folder_weight = @folder_weights[base]? @folder_weights[base] : 0
        tree[base] = {"weight" => folder_weight, "subtree" => subtree}
      end

      tree_array = []

      tree.each do |key, value|
        tree_array.push(:base => key, :weight => value["weight"], :subtree => value["subtree"])
      end

      sorted_tree = tree_array.sort_by {|node| [ -(node[:weight]), node[:base] ]}

      files_first_traverse "", sorted_tree, 0
    end

    def files_first_traverse(prefix, nodes = [], depth=0)
      output = ""
      if depth == 0
        id = 'id="nav-menu"'
      end
      output += "#{prefix}<ul #{id} class=\"nav nav-list\">"

      nodes.each do |node|
          base = node[:base]
          subtree = node[:subtree]

          name = base[1..-1]

          if name.index('.') != nil
            icon_name = @nodes[name]["icon"]
            name = @nodes[name]["title"]
          end

          li_class = ""
          if base == @page_url
            li_class = "active"
            if icon_name
              icon_name = icon_name + " icon-white"
            end
          end

          icon_html = "<span class=\"#{icon_name}\"></span>" unless icon_name.nil?

          output += "#{prefix}<li class=#{li_class}><a href=\"#{URI::encode base}\">#{icon_html}#{name}</a></li>" if subtree.empty?
      end

      nodes.each do |node|
        base = node[:base]
        subtree = node[:subtree]

        next if subtree.empty?
          href = base
          name = base[1..-1]
          if name.index('.') != nil
            is_parent = false
            name = @nodes[name]["title"]
          else
            is_parent = true
            href = base + '/index.html'
            if name.index('/')
              name = name[name.rindex('/')+1..-1]
            end
          end

          name.gsub!(/_/,' ')

          li_class = ""

          if @page_url.index(base + '/')
            list_class = "collapsibleListOpen"
          else
            list_class = "collapsibleListClosed"
          end

          if href == @page_url
            li_class = "active"
          end

          if is_parent
            id = Digest::MD5.hexdigest(base)

            icon_name = @folder_icons[base]

            icon_html = icon_name.nil? ? "" : "<span class=\"#{icon_name}\"></span>"

						#if name is in folder_names.yml, rewrite it
						folder_name = @folder_names[name]? @folder_names[name] : name

            li = "<li id=\"node-#{id}\" class=\"parent #{list_class}\"><div class=\"subtree-name\">#{icon_html}#{folder_name}</div>"
          else
            icon_name = @nodes[name]["icon"]

            if icon_name && li_class=="active"
              icon_name = icon_name + " icon-white"
            end

            icon_html = icon_name.nil? ? "<i class=\"#{icon_name}\"></i>" : ""
            li = "<li class=\"#{li_class}\"><a href=\"#{URI::encode href}\">#{icon_html}#{name}</a></li>"
          end

          output += "#{prefix}	#{li}"

          subtree_array = []
          subtree.each do |base, subtree|
            subtree_array.push(:base => base, :subtree => subtree)
          end

          depth = depth + 1
          output += files_first_traverse(prefix + '	 ', subtree_array, depth)

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
