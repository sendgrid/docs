# as we loop through each page
  # take the last dir in the URL
  # add the page to that URL's list
require 'tree'
require 'set'

module Jekyll
  # Add accessor for directory
  class Page
    attr_reader :dir
  end

  class NavTree < Liquid::Tag
    def initialize(tag_name, text, tokens)
      super
    end

    def expand_node(node)
      if node.name != "/"
        output = '<li><a href="'+node.content+'">'+ node.content+'</a></li>'
      else
        output =''
      end 
      puts output
      
      
      
      if node.has_children?
        if node.name != "/"
          output+='<ul class="nav nav-list">'
        end
        
        node.children.each do |child|
          output += expand_node(child)
        end
        
        if node.name != "/"
          output+='</ul>'
        end
      end
      output
    end

    def render(context)
      site = context.registers[:site]
      output=''
    
      root_node = Tree::TreeNode.new("/", "Root")
            
      site.pages.each do |page|
        split = (page.dir + page.url).split('/')
        prev_node = nil 
        
        split.each do |chunk|
          if chunk == "" 
            next
          end
          
          exists = root_node.find{ |node| node.name == chunk }
          
          if exists
            # node already exists, move along
            prev_node = exists
            next
          end

          node = Tree::TreeNode.new(page.dir + page.url, chunk)

          if prev_node != nil
            prev_node << node
            
            if chunk.index('.') != nil
              #we've reached a leaf
              prev_node = nil
            end
          else
            root_node << node
          end

          prev_node = node
        end
        puts root_node.print_tree
      end

      test = root_node.each { |node| puts node.inspect }
      
      #output = expand_node(root_node)
      #puts output

      #site.pages.each do |page|
      #  if page.data['title'] && page.data['navigation']['show'] != false
      #    output += '<li><a href="'+page.dir+page.url+'">'+(page.data['title'] || page.url) +'</a></li>'
      #  end
      #end

      output
    end
  end

end

Liquid::Template.register_tag('nav_tree', Jekyll::NavTree)