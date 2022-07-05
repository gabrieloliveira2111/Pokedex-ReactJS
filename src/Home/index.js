import { React , useContext, useEffect, useState, useMemo } from 'react';
import PokeLoading from '../components/PokeLoading';
import SearchBar from '../components/SearchBar';
import { AppContext } from '../contexts/AppContext';
import { CardContainer, HomeContainer, ImgContainer, ImgPokemon, InfoContainer, PokemonName, PokemonNumber, PokemonType, TypesContainer } from './styled';


const Home = () => {
    const { pokemon, filterPoke, setFilterPoke, loading } = useContext(AppContext)
    const[search, setSearch] = useState('')

    const searchLower = search.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "") 
    const filter = pokemon.filter((pokemon) => pokemon.data.name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").includes(searchLower))

    useEffect(() => {
        setFilterPoke(filter)
    },[searchLower])

    console.log(filterPoke)

    const PokemonCard = useMemo(() => {
        return (
            <div className="container">
                <div className="row">
                    { 
                        filterPoke.map((pokemon, index) => 
                            <CardContainer key={index} className="col-sm-6 col-md-4 col-lg-3 mt-5">
                                    <ImgContainer className="bg-light rounded">
                                        <ImgPokemon
                                            alt={pokemon.data.name} 
                                            src={pokemon.data.sprites.other["official-artwork"].front_default} 
                                            className="img-fluid"
                                        />
                                    </ImgContainer>
                                    <InfoContainer className="mx-lg-3">
                                        <PokemonNumber className="mx-1">Nº{("000" + pokemon.data.id).slice(-3)}</PokemonNumber>
                                        <PokemonName className="mx-1">{pokemon.data.name[0].toUpperCase() + pokemon.data.name.substring(1)}</PokemonName>
                                        <TypesContainer className="row">
                                            <PokemonType className="col-4 ms-3 rounded">{pokemon.data.types[0].type.name[0].toUpperCase() + pokemon.data.types[0].type.name.substring(1)}</PokemonType>
                                            { 
                                                pokemon.data.types[1]?.type.name && 
                                                <PokemonType className="col-4 ms-2 rounded">{pokemon.data.types[1].type.name[0].toUpperCase() + pokemon.data.types[1].type.name.substring(1)}</PokemonType>    
                                            }
                                        </TypesContainer>
                                    </InfoContainer>
                            </CardContainer>
                        )
                    }
                </div>
            </div>  
        )    
    }, [filterPoke])

    return (
        !loading ? (
            <HomeContainer>
                <SearchBar search={search} setSearch={setSearch}/>
                    { PokemonCard }   
            </HomeContainer>
        ) : <PokeLoading />
  )
}

export default Home