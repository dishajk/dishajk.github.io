module Jekyll
    class CategoryPageGenerator < Generator
      safe true
  
      def generate(site)
        categories = Hash.new { |hash, key| hash[key] = [] }
  
        # Collect all projects and group by category
        site.collections["projects"].docs.each do |project|
          project.data["categories"]&.each do |category|
            categories[category] << project
          end
        end
  
        # Prevent duplicate category pages
        existing_pages = site.pages.map { |p| p.url }
  
        categories.each do |category, projects|
          category_path = "/projects/#{Jekyll::Utils.slugify(category)}/index.html"
  
          unless existing_pages.include?(category_path)
            site.pages << CategoryPage.new(site, site.source, category, projects)
          end
        end
      end
    end
  
    class CategoryPage < Page
      def initialize(site, base, category, projects)
        @site = site
        @base = base
        @dir = "projects/#{Jekyll::Utils.slugify(category)}"
        @name = "index.html"
  
        self.process(@name)
        self.read_yaml(File.join(base, "_layouts"), "category.html")
        self.data["title"] = "#{category}"
        self.data["category"] = category  # Ensure {{ page.category }} works
        self.data["projects"] = projects
      end
    end
  end  