import { React , useContext, useEffect, useState } from 'react';
import SearchBar from '../components/SearchBar';
import { AppContext } from '../contexts/AppContext';


const Home = () => {

    const { pokemon, filterPoke, setFilterPoke } = useContext(AppContext)

    const[search, setSearch] = useState('')

    const searchLower = search.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "") 
    const filter = pokemon.filter((pokemon) => pokemon.data.name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").includes(searchLower))
    
    useEffect(() => {
        setFilterPoke(filter)
    },[searchLower])

  return (
    <div>
        <SearchBar search={search} setSearch={setSearch}></SearchBar>
                <div>
                {
                    filterPoke.map((pokemon, index) => 
                        <div key={index}>
                            <img alt={pokemon.data.name} src={pokemon.data.sprites.other["official-artwork"].front_default}></img>
                            <h2>{pokemon.data.name[0].toUpperCase() + pokemon.data.name.substring(1)}</h2>
                            <p>{pokemon.data.types[0].type.name}</p>
                            {pokemon.data.types[1]?.type.name && 
                                <p>{pokemon.data.types[1].type.name}</p>    
                            }
                        </div>
                    )
                }
                </div>
    </div>
  )
}

export default Home