const { default: axios } = require('axios');
const { Pokemon, Type } = require('../db')
const { API_URL } = process.env

const getPokemons = async () => {

    const response = await axios(API_URL)
    const apiData = response.data.results

    let aux = []

    const mapeo = await apiData.forEach(element => {
            aux.push(element)
    });
    return aux
}

module.exports = getPokemons