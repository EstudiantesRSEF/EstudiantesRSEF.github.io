# _plugins/visitas.rb
#
# Añade automáticamente `post.views` a cada entrada del blog, leyendo el
# número de visitas desde _data/visitas.yml (que actualiza el workflow
# de GitHub Actions con los datos reales de Google Analytics).
#
# Si una entrada todavía no tiene visitas registradas (por ejemplo, es
# nueva y el workflow no ha corrido todavía), se le asigna 0 por defecto.
 
Jekyll::Hooks.register :posts, :post_init do |post|
  visitas = post.site.data['visitas'] || {}
  post.data['views'] = visitas[post.url] || 0
end
 
