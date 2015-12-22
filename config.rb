require 'slim'

page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false
page '404.html', directory_index: false
page 'google4adc10d2fe0eccaa.html', directory_index: false

configure :development do
  activate :livereload
end

configure :build do
  activate :minify_css
  activate :minify_javascript
  activate :asset_hash
end

sprockets.append_path File.join root, 'bower_components'

activate :autoprefixer
activate :directory_indexes

ignore 'blog_redirect.html'
old_blog_redirects = [
  ['2010/cluster-like-computing-using-gnu-parallel', 'cluster-like-computing-using-gnu-parallel-abc1730ee9a4'],
  ['2011/summer-at-cold-spring-harbor-laboratory', 'a-summer-at-cold-spring-harbor-laboratory-b2bb7ad65d31'],
  ['2011/science-in-cinema-contagion', 'science-in-cinema-contagion-19949b39504'],
  ['2011/steve-jobs-returns-0', 'steve-jobs-returns-0-ed03ce3d8a97'],
  ['2012/three-simple-steps-to-becoming-successful', 'three-simple-steps-to-becoming-successful-9cb7db6c612d'],
  ['2012/intro-to-biology-of-cancer', 'an-introduction-to-the-biological-basis-of-cancer-18e39925d88d'],
  ["2012/you'll-never-be-truly-appreciated", 'you-ll-never-be-truly-appreciated-but-do-it-anyway-907b73160324'],
  ['2012/wwpgd-postmortem', 'what-hacker-news-wants-to-know-from-paul-graham-a-what-would-paul-graham-do-postmortem-22d1bc2690de'],
  ["2012/there's-no-shame-in-asking-for-help", 'there-s-no-shame-in-asking-for-help-77e751d81c41'],
  ['2013/sorry-state-of-trie-implementations-in-python', 'the-much-less-sorry-state-of-trie-implementations-in-python-cb5c7baf6ba3'],
  ['2013/happy-birthday-mom', 'happy-birthday-mom-8625e9338053']
]

old_blog_redirects.each do |old_path, medium_slug|
  proxy "/blog/#{old_path}.html", 'blog_redirect.html', locals: { slug: medium_slug }
end
