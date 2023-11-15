const { Router } = require("express");
const { getAllPokemons, getPokemonDetail } = require("../Controllers/pokemon-controller")

const router = Router();

router.get('/', async (req, res) => {
  try {
    //extraigo el name que llegue por query
    const { name } = req.query;
    //guardamos los pokemones en una variable
    let pokemons = await getAllPokemons()
    //en el caso de que llegue uso el valor para buscar el pokemon y retorno el resultado
    if (name){
      let pokemon = pokemons.filter(e => e.name.toLowerCase() === name.toLocaleLowerCase());
      
      pokemon.length ? res.status(200).json(pokemon) : res.status(404).json({ Error: 'Pokemon not found!!'})  
    } else {
      //en el caso de que no llegue name por query traigo todos los pokemons disponibles
      const allPokemons = await getAllPokemons();
      //retorno la respuesta del controlador
      return res.status(200).json(allPokemons);
    }   
  } catch (e) {
    return res.status(400).json(e.message)
  }
  }
);

router.get('/:name', async (req, res) => {
  //extraigo el id que envian por parametro
  const id = req.params.name;
  let allPokemons = await getPokemonDetail(id)
console.log(allPokemons);
  try {
    //verifico que este parametro tenga valor
    if(allPokemons === undefined) {
      //retorno el error
      return res.status(400).json({ error: 'ID has not been provided!!'})
    }
    //si no recibo el id simplemente retorno un error
    else return res.status(200).json(allPokemons)
    
  } catch (e) {
    return res.status(400).json(e.message)
  }
});


module.exports = router;