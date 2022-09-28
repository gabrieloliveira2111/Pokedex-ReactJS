import axios from 'axios'

export const getPokemonList = async (limit) => {
  return await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=0&offset=${limit}.`)
}
export const getPokemonImg = async (url) => {
  return await axios.get(url)
}
