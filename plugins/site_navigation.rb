module Jekyll
  class SiteNavigation < Jekyll::Generator
    safe true
    priority :lowest

    def generate(site)
        # First remove all invisible items (default: nil = show in nav)
        sorted = []
        site.pages.each do |page|
           puts page.data.inspect
           sorted << page if page.data["navigation"]["show"] != false
        end

        # Then sort em according to weight
        sorted = sorted.sort{ |a,b| a.data["navigation"]["weight"] <=> b.data["navigation"]["weight"] } 

        # Debug info.
        puts "Sorted resulting navigation:  (use site.config['sorted_navigation']) "
        sorted.each do |p|
          puts p.inspect 
        end

        # Access this in Liquid using: site.navigation
        site.config["navigation"] = sorted
    end
  end
end