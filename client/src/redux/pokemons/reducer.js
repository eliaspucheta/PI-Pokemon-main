/* eslint-disable no-case-declarations */
import { TYPES } from "./action"
// eslint-disable-next-line no-unused-vars
const { UPDATE_POKEMON, DELETE_POKEMON, ADD_POKEMON, GET_POKEMONS, GET_TYPES, ORDER_ATTACK, ORDER_ALFABETIC, RESET_FILTERS, FILTER_FROM, FILTER_BY_TYPE, GET_POKEMON } = TYPES

const initialState = {
  pokemons: [],
  backup: [],
  types: []
}

const pokemonsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POKEMONS:
      return { ...state, pokemons: action.payload, backup: action.payload };
    case GET_POKEMON:
      return {
        ...state,
        pokemons: Array.isArray(action.payload) ? [...action.payload] : [action.payload]
      }
    case GET_TYPES:
      return { ...state, types: action.payload };
    case RESET_FILTERS:
      return {
        ...state,
        pokemons: state.backup
      }
    case ADD_POKEMON:
      return {
        ...state
      }
    case UPDATE_POKEMON:
      return {
        ...state
      }
    case DELETE_POKEMON:
      const findPoke = state.pokemons.find(el => el.id === action.payload)
      if (findPoke) {
        const filteredArr = state.pokemons.filter(el => el.id !== action.payload)
        const filteredBackup = state.backup.filter(el => el.id !== action.payload)
        return {
          ...state,
          pokemons: filteredArr,
          backup: filteredBackup
        }
      } else {
        return {
          ...state
        }
      }
    case ORDER_ATTACK:
      const pokemonsCopy = [...state.pokemons]
      return {
        ...state,
        pokemons: action.payload === 'attackASC' ?
          pokemonsCopy.sort((a, b) => a.attack - b.attack) :
          pokemonsCopy.sort((a, b) => b.attack - a.attack)
      }
    case ORDER_ALFABETIC:
      const pokemonsCopy2 = [...state.pokemons]
      return {
        ...state,
        pokemons: action.payload === 'aZ' ?
          pokemonsCopy2.sort((a, b) => a.name.localeCompare(b.name)) :
          pokemonsCopy2.sort((a, b) => b.name.localeCompare(a.name))
      }
    case FILTER_FROM:
      const uuidRegex =
        /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
      const copy = [...state.backup]
      if (action.payload === 'api') {
        const apiPokes = copy.filter(el => !uuidRegex.test(el.id))
        return {
          ...state,
          pokemons: apiPokes
        }
      } else if (action.payload === 'db') {
        const dbPokes = copy.filter(el => uuidRegex.test(el.id))
        return {
          ...state,
          pokemons: dbPokes
        }
      }
      break
    case FILTER_BY_TYPE:
      const backupCopy = [...state.backup]
      console.log(backupCopy);
      return {
        ...state,
        pokemons: backupCopy.filter(pokemon => pokemon.types.some(el => el.name === action.payload))
      }
    default:
      return { ...state }
  }
}

export default pokemonsReducer