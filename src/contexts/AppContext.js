import React, { createContext, useState } from 'react'
import { getPokemonImg, getPokemonList, searchPokemonResquest } from '../services'

export const AppContext = createContext()

export const AppProvider = ({ children }) => {
  const [pokemon, setPokemon] = useState([])
  const [loading, setLoading] = useState(false)
  const [request, setRequest] = useState(1)

  const getAllPokemon = async (pokemonLimit) => {
    try {
      if (request > 0) {
        const { data } = await getPokemonList(pokemonLimit)
        const promises = data.results.map(async (pokemon) => {
          return await getPokemonImg(pokemon.url)
        })
        const results = await Promise.all(promises)
        setPokemon([...pokemon, ...results])
        setRequest(results.length)
        setLoading(false)
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <AppContext.Provider value={{ getAllPokemon, pokemon, loading }}>
      {children}
    </AppContext.Provider>
  )
}
