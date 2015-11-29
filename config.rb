require 'slim'

page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false
page '404.html', directory_index: false

configure :development do
  activate :livereload
end

configure :build do
  activate :minify_css
  activate :minify_javascript
end

sprockets.append_path File.join root, 'bower_components'

activate :autoprefixer
activate :directory_indexes
