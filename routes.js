const routes = require('next-routes')


module.exports = routes()
    .add('home', '/', 'index')
    .add('type', '/type', 'index')
    .add('PokemonList', '/PokemonList/:id', 'PokemonList')
    .add('Pokemon', '/pokemon/:id', 'Pokemon')  