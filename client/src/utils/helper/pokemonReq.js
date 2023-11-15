import axios from "axios"


export const getPokemonByIdReq = async (id) => {
  const { data } = await axios(`/pokemons/${id}`)
  console.log(data);
  return data
}