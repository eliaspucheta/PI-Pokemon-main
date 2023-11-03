const { Router } = require("express");
const { Pokemon, Type } = require("../db");
const getPokemons = require("../Controllers/getPokemons-controller");

const router = Router();

router.post("/pokemons", async (req, res) => {
  //console.log(req.body);
  const { name, img, hp, str, def, speed, height, weight, types } = req.body;

  if(!name || !img || !hp || !str || !def || !speed || !height || !weight || !types )
  return res.status(400).send('Missing required data!!')

  try {
      if (name) {
      const allPokemons = await getPokemons();
      //console.log(allPokemons);
      const pokemon = allPokemons.find((e) => e.name == name.toLowerCase());

      if (!pokemon) {
        const pokemon = await Pokemon.create({
          name,
          img,
          hp,
          str,
          def,
          speed,
          height,
          weight,
        });

        const typeInDb = await Type.findAll({
          where: {
            name: types,
          },
        });
        pokemon.addType(typeInDb);
        return res.status(201).json(`The pokemon ${name} has been succesfully created, enjoy!!`);
      }
      return res.status(401).send("Name already exist!!");
    }
    return res.status(401).send("Pokemon name is obligatory!!");
  } catch (error) {
    return res.status(400).json({ Error: error.message });
  }
});

module.exports = router;
