import { useEffect, useState } from 'react';
import './App.css';
import {  getPokemon, getPokemonList } from './services';

function App() {

    const[pokemon, setPokemon] = useState([])

    const getAllPokemon =  async() => {
        try {
            const { data } = await getPokemonList()
            const promises = data.results.map(async(pokemon) => {
                return await getPokemon(pokemon.url)
            })

            const results = await Promise.all(promises)
            console.log(results)
            setPokemon(results)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getAllPokemon()
    }, [])

    return (
        <div className="App">
            <h2>
                {
                    pokemon.map((pokemon, index) => 
                        <div key={index}>
                            <img alt={pokemon.data.name} src={pokemon.data.sprites.other["official-artwork"].front_default}></img>
                            <h2>{(pokemon.data.name).toUpperCase()}</h2>
                        </div>
                    )
                }
            </h2>
        </div>
    );  
}

export default App;