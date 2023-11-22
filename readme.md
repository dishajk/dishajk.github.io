This is the repository for Disha Kuzhively's personal webpage and blog. It is built using Jekyll and features a navigation bar, blog posts, projects, and other sections.

## Table of Contents
- [Directory Structure](#directory-structure)
- [Dependencies](#dependencies)
- [Configuration](#configuration)
- [Updating the Site](#updating-the-site)
- [Customization](#customization)

## Directory Structure

├── _config.yml       # Jekyll configuration file

├── _posts            # Blog posts in Markdown format

├── _layouts          # HTML layouts for different sections

├── _includes         # Reusable HTML components

├── _sass             # Sass stylesheets

├── assets            # Static assets (CSS, images, JavaScript)

├── projects          # Subdirectory for project pages

├── _data             # YAML files for data (e.g., navigation, project info)

├── _site             # Auto-generated site (ignored by Git)

└── ...               # Other directories and files

## Dependencies

- Jekyll
- Bootstrap

## Configuration

- Edit `_config.yml` for global site configuration. Jekyll configuration file. Update site settings, navigation, and other options here.

## Content Organization

   - _posts: Blog posts written in Markdown format. Follow the naming convention YYYY-MM-DD-post-title.md.
   - projects: Subdirectory for project pages. Organize project pages in a structured manner.

## Customization

- Modify styles in the `_sass/main.scss` directory.
- Customize the header by editing `_includes/header.html`.
- _foldername is called a collection, update the config file when a new collection is added
- Customize the _data directory for additional data files.
- Update styles in the _sass directory for custom styling.

## Adding New Content

### Blog Post

- Navigate to the _posts directory.
- Create a new Markdown file using the format YYYY-MM-DD-post-title.md.
- Write your blog post using Markdown syntax.

### Project Page

#### Origami
   - add modelname.html to `_origami`
- Navigate to the projects directory.
- Create a new HTML file for your project.
- Add content to the project page.

### Building and Running

`bundle install`
`bundle exec jekyll serve --livereload`