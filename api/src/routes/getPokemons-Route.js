const { Router } = require("express");
const getPokemons = require('../Controllers/getPokemons-controller')

const router = Router();

router.get('/', async (req, res) => {
  try {
    //extraigo el name que llegue por query
    const { name } = req.query;
    //guardamos los pokemones en una variable
    let pokemons = await getPokemons()
    //en el caso de que llegue uso el valor para buscar el pokemon y retorno el resultado
    if (name){
      let pokemon = pokemons.filter(e => e.name.toLowerCase() === name.toLocaleLowerCase());
      
      pokemon.length ? res.status(200).json(pokemon) : res.status(404).json({ Error: 'Pokemon not found!!'})  
    } else {
      //en el caso de que no llegue name por query traigo todos los pokemons disponibles
      const allPokemons = await getPokemons();
      //retorno la respuesta del controlador
      return res.status(200).json(allPokemons);
    }   
  } catch (error) {
    return res.status(400).json(error.message)
  }
  }
);

router.get('/:id', async (req, res) => {
  //extraigo el id que envian por parametro
  const { id } = req.params;
  
  let allPokemons = await getPokemons()

  try {
    //verifico que este parametro tenga valor
    if(id) {
      let pokeById = allPokemons.filter(e => e.id == id)
      //retorno la respuesta
      pokeById.length ? res.status(200).json(pokeById) : res.status(404).send('Pokemon not found!!')
    }
    //si no recibo el id simplemente retorno un error
    else return res.status(400).json({ error: 'ID has not been provided!!'})
    
  } catch (error) {
    return res.status(400).json(error.message)
  }
});


module.exports = router;