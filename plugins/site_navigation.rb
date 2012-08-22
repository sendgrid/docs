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

  class NavTree < Jekyll::Generator
    def generate(site)
      output=''
    
      @root_node = Tree::TreeNode.new("/", "Root")
            
      site.pages.each do |page|
        split = (page.dir + page.url).split('/')
        prev_node = nil 
        
        split.each do |chunk|
          if chunk == "" 
            next
          end

          # name needs to be unique - the path to this node so far
          if prev_node != nil
            path = ""
            
            prev_node.parentage.reverse.each do |parent|
              path += parent.name
            end
            
            puts path
            name = path + chunk
            puts name
          else
            name = chunk
          end 

          exists = @root_node.find{ |node| node.name == name }
                  
          if exists
            puts exists.name + " -- already exists"
            prev_node = exists
            next
          end

          node = Tree::TreeNode.new(name, chunk)

          if prev_node != nil
            prev_node << node
            
            if chunk.index('.') != nil
              #we've reached a leaf
              prev_node = nil
            end
          else
            @root_node << node
          end

          prev_node = node
        end

      end
      
      puts @root_node.print_tree
      
      site.config["navigation"] = output
    end
  end
end