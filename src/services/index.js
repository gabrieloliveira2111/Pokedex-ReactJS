import axios from 'axios'

export const getPokemonList = async() => {
    return await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0.')
}
export const getPokemon = async(url) => {
    return await axios.get(url)
}