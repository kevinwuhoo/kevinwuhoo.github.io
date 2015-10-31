require 'slim'

configure :development do
  activate :livereload
end

configure :build do
  activate :minify_css
  activate :minify_javascript
end

sprockets.append_path File.join root, 'bower_components'

activate :autoprefixer
