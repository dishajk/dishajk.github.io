module Jekyll
  class CategoryPageGenerator < Generator
    safe true

    def generate(site)
      categories = Hash.new { |hash, key| hash[key] = [] }

      # Collect from _projects collection
      site.collections["projects"].docs.each do |project|
        project.data["categories"]&.each do |category|
          categories[category] << project
        end
      end

      # Collect from _posts if type: project
      site.posts.docs.each do |post|
        next unless post.data["type"] == "project"

        post.data["categories"]&.each do |category|
          categories[category] << post
        end
      end

      # Sort categories by the most recent project date (descending)
      sorted_categories = categories.sort_by do |_, projects|
        latest_date = projects.map { |p| p.data["date"] || Time.at(0) }.max
        -latest_date.to_i
      end.to_h

      # Store sorted category names for use in templates
      site.data["project_categories"] = sorted_categories.keys

      # Prevent duplicate category pages
      existing_pages = site.pages.map { |p| p.url }

      sorted_categories.each do |category, projects|
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