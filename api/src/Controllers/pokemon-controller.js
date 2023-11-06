const { default: axios } = require("axios");
const { Pokemon, Type } = require("../db");
const { API_INFO } = process.env;

let getApiInfo = async () => {
  try {
    let pokemones = [];
    let url = "https://pokeapi.co/api/v2/pokemon";
    do {
      let info = await axios(url);
      let pokemonesFromApi = info.data;
      let auxPokemones = pokemonesFromApi.results.map((e) => {
        return {
          name: e.name,
          url: e.url,
        };
      });
      console.log(pokemones);
      pokemones.push(...auxPokemones);
      url = pokemonesFromApi.next;
    } while (API_INFO !== null && pokemones.length <= 40);

    let pokeData = await Promise.all(
      pokemones.map(async (e) => {
        let pokemon = await axios(e.url);
        return {
          id: pokemon.data.id,
          name: pokemon.data.name,
          img: pokemon.data.sprites.other.home.front_default,
          types: pokemon.data.types.map((e) => {
            return {
              name: e.type.name,
              img: `https://typedex.app/images/ui/types/dark/${e.type.name}.svg`,
            };
          }),
          hp: pokemon.data.stats[0].base_stat,
          attack: pokemon.data.stats[1].base_stat,
          defense: pokemon.data.stats[2].base_stat,
          speed: pokemon.data.stats[5].base_stat,
          height: pokemon.data.height,
          weight: pokemon.data.weight,
        };
      })
    );
    return pokeData;
  } catch (e) {
    console.log(e);
  }
};

async function getPokemonDetail(arg) {
  try {
    const apiData = await axios(`https://pokeapi.co/api/v2/pokemon/${arg}`);
    if (apiData === undefined) {
      apiData = pokemonByIdDB(arg)
    }
    const data = apiData.data;
    const pokemonData = {
      id: data.id,
      name: data.name,
      img: data.sprites.other.home.front_default,
      types: data.types.map((e) => {
        return {
          name: e.type.name,
          img: `https://typedex.app/images/ui/types/dark/${e.type.name}.svg`,
        };
      }),
      hp: data.stats[0].base_stat,
      attack: data.stats[1].base_stat,
      defense: data.stats[2].base_stat,
      speed: data.stats[5].base_stat,
      height: data.height,
      weight: data.weight,
    };
    return pokemonData;
  } catch (e) {
    return e;
  }
}

const pokemonByIdDB = async (id) => {
  const findPokemon = await Pokemon.findByPk(id, {
    include: {
      model: Type,
      attributes: ["name"],
      through: { 
        attributes: [] 
      },
    },
  });
  if (findPokemon) return findPokemon;
};

const getDbInfo = async () => {
  return await Pokemon.findAll({
    include: {
      model: Type,
      attributes: ["name"],
      trough: {
        attributes: [],
      },
    },
  });
};

let getAllPokemons = async () => {
  let apiInfo = await getApiInfo();
  let dbInfo = await getDbInfo();
  const allPokemon = apiInfo.concat(dbInfo);

  return allPokemon;
};

module.exports = {
  getApiInfo,
  getDbInfo,
  getAllPokemons,
  getPokemonDetail,
  pokemonByIdDB,
};
