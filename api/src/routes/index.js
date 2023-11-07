const { Router } = require('express');
// Importar todos los routers;
const getPokemons = require('./getPokemons-Route')
//const getPokemonsById = require('./getPokemonsById')
const postPokemons = require('./postPokemons-Route')
const getPokemonsType = require('./getPokemonsType-Route')

const router = Router();

// Configurar los routers
router.use('/pokemons', getPokemons)
router.use('/types', getPokemonsType)
router.post('/pokemons', postPokemons)


module.exports = router;