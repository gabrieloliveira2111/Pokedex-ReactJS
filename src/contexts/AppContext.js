import React, { createContext, useState } from 'react'
import { getPokemon, getPokemonList } from '../services'

export const AppContext = createContext()

export const AppProvider = ({ children }) => {
  const [pokemon, setPokemon] = useState([])
  const [filterPoke, setFilterPoke] = useState([])
  const [loading, setLoading] = useState(true)

  const getAllPokemon = async (pokemonLimit) => {
    try {
      const { data } = await getPokemonList(pokemonLimit)
      const promises = data.results.map(async (pokemon) => {
        return await getPokemon(pokemon.url)
      })
      const results = await Promise.all(promises)
      setPokemon(results)
      setFilterPoke(results)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <AppContext.Provider value={{ getAllPokemon, pokemon, filterPoke, setFilterPoke, loading }}>
      {children}
    </AppContext.Provider>
  )
}
