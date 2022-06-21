import React, { createContext, useState } from 'react'
import { getPokemon, getPokemonList } from '../services'

export const AppContext = createContext()

export const AppProvider = ({ children }) => {
    
    const[ pokemon, setPokemon ] = useState([])
    const[ filterPoke , setFilterPoke] = useState([])

    const getAllPokemon = async() => {
        try {
            const { data } = await getPokemonList()
            const promises = data.results.map(async(pokemon) => {
                return await getPokemon(pokemon.url)
            })

            const results = await Promise.all(promises)
            setPokemon(results)
            setFilterPoke(results)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <AppContext.Provider
            value={{ getAllPokemon, pokemon, filterPoke, setFilterPoke }}
        >
            {children}
        </AppContext.Provider>
    )
}
