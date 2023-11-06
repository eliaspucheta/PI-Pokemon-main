import axios from "axios"
import Swal from "sweetalert2"

export const TYPES = {
  DELETE_POKEMON: "DELETE_POKEMON",
  UPDATE_POKEMON: 'UPDATE_POKEMON',
  GET_POKEMONS: "GET_POKEMONS",
  GET_POKEMON: "GET_POKEMON",
  GET_TYPES: "GET_TYPES",
  ADD_POKEMON: "ADD_POKEMON",
  ORDER_ATTACK: 'ORDER_ATTACK',
  ORDER_ALFABETIC: 'ORDER_ALFABETIC',
  RESET_FILTERS: 'RESET_FILTERS',
  FILTER_FROM: 'FILTER_FROM',
  FILTER_BY_TYPE: 'FILTER_BY_TYPE'
}

export const getPokemonsAction = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios(`/pokemons`)
      return dispatch({
        type: TYPES.GET_POKEMONS,
        payload: data
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export const getTypesAction = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios(`/types`)
      return dispatch({
        type: TYPES.GET_TYPES,
        payload: data
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export const orderAttackAction = (order) => {
  return {
    type: TYPES.ORDER_ATTACK,
    payload: order
  }
}

export const orderAlfabeticAction = (order) => {
  return {
    type: TYPES.ORDER_ALFABETIC,
    payload: order
  }
}

export const resetFiltersAction = () => {
  return {
    type: TYPES.RESET_FILTERS,
  }
}

export const filterFromApiOrDb = (filter) => {
  return {
    type: TYPES.FILTER_FROM,
    payload: filter
  }
}

export const filterByTypeAction = (type) => {
  return {
    type: TYPES.FILTER_BY_TYPE,
    payload: type
  }
}

export const getPokemonByNameAction = (name) => {
  return async (dispatch) => {
    try {
      const { data } = await axios(`/pokemons/?name=${name}`)
      return dispatch({
        type: TYPES.GET_POKEMON,
        payload: data
      })
    } catch (error) {
      Swal.fire({
        position: 'top',
        toast: true,
        icon: 'error',
        title: `${error.message === "Network Error" ? "Network Error" : 'Pokemon not found'}`,
        timer: 2000,
        showConfirmButton: false
      })
    }
  }
}

export const createPokemonAction = (pokemon) => {
  return async (dispatch) => {
    try {
      await axios.post(`/pokemons`, pokemon)
      Swal.fire({
        icon: 'success',
        toast: true,
        showConfirmButton: false,
        title: 'Pokemon created!',
        position: 'bottom',
        timer: 2000
      })
      return dispatch({
        type: TYPES.ADD_POKEMON
      })
    } catch (error) {
      Swal.fire({
        position: 'top',
        toast: true,
        showConfirmButton: false,
        icon: 'error',
        title: `${error.message === "Network Error" ? "Network Error" : 'Error creating Pokemon'}`,
        text: `${error.message === "Network Error" ? 'your connection is lost' : error.response?.data.message} `,
        timer: 4000
      })
    }
  }
}

export const deleteDbPokemonAction = (id) => {
  return async (dispatch) => {
    try {
      await axios.delete(`/pokemons/${id}`)
      Swal.fire({
        icon: 'success',
        showConfirmButton: false,
        position: 'top',
        title: 'pokemon deleted!',
        toast: true,
        timer: 1000
      })
      return dispatch({
        type: TYPES.DELETE_POKEMON,
        payload: id
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export const updatePokemonAction = (id, info) => {
  return async (dispatch) => {
    await axios.put(`/pokemons/update/${id}`, info)
    Swal.fire({
      icon: 'success',
      showConfirmButton: false,
      position: 'top',
      title: 'pokemon updated!',
      toast: true,
      timer: 1000
    })
    return dispatch({
      type: TYPES.UPDATE_POKEMON
    })
  }
}