import { React, useContext, useEffect, useState } from 'react'
import PokeLoading from '../components/PokeLoading'
import { AppContext } from '../contexts/AppContext'
import {
  CardContainer,
  HomeContainer,
  ImgContainer,
  ImgPokemon,
  InfoContainer,
  PokemonName,
  PokemonNumber,
  PokemonType,
  TypesContainer
} from './styled'

const Home = () => {
  const { pokemon, loading, getAllPokemon } = useContext(AppContext)
  const [scroll, setScroll] = useState()
  const [qtd, setQtd] = useState(0)

  const observer = new IntersectionObserver((entries) => {
    const radio = entries[0].intersectionRatio
    setScroll(radio)
  })

  useEffect(() => {
    observer.observe(document.querySelector('#sentinela'))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (scroll > 0) {
      getAllPokemon(qtd)
      setQtd(qtd + 20)
    }
  }, [scroll])
  return (
    <>
      {!loading ? (
        <HomeContainer>
          <div className="container">
            <div className="row">
              {pokemon.map((pokemon, index) => (
                <CardContainer key={index} className="col-sm-6 col-md-4 col-lg-3 mt-5">
                  <ImgContainer className="bg-light rounded">
                    <ImgPokemon
                      alt={pokemon.data.name}
                      src={pokemon.data.sprites.other['official-artwork'].front_default}
                      className="img-fluid"
                    />
                  </ImgContainer>
                  <InfoContainer className="mx-lg-3">
                    <PokemonNumber className="mx-1">
                      Nº{('000' + pokemon.data.id).slice(-3)}
                    </PokemonNumber>
                    <PokemonName className="mx-1">{pokemon.data.name}</PokemonName>
                    <TypesContainer className="row">
                      <PokemonType className="col-4 ms-3 rounded text-center">
                        {pokemon.data.types[0].type.name}
                      </PokemonType>
                      {pokemon.data.types[1]?.type.name && (
                        <PokemonType className="col-4 ms-2 rounded text-center">
                          {pokemon.data.types[1].type.name}
                        </PokemonType>
                      )}
                    </TypesContainer>
                  </InfoContainer>
                </CardContainer>
              ))}
            </div>
          </div>
        </HomeContainer>
      ) : (
        <PokeLoading />
      )}
      <div id="sentinela"></div>
    </>
  )
}

export default Home
