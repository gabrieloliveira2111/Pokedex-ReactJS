import axios from 'axios'

export const getPokemonList = async(limit) => {
    return await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=0.`)
}
export const getPokemon = async(url) => {
    return await axios.get(url)
}
