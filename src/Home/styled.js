import styled, {css} from "styled-components";

export const HomeContainer = styled.section`
`
export const CardContainer = styled.div`
`
export const ImgContainer = styled.figure`
`
export const ImgPokemon = styled.img`
`
export const InfoContainer = styled.div`
`
export const PokemonNumber = styled.p`
`
export const PokemonName = styled.h3`
    text-transform: capitalize;
`
export const TypesContainer = styled.div`
`
export const PokemonType = styled.p`
    text-transform: capitalize;
    ${(props) => {
    switch (props.children) {
        case "grass":
            return css`
                background-color: #9bcc50;
                color: black;
        `
        case "poison":
            return css`
                background-color: #b97fc9;
                color: white;
        `
        case "fire":
            return css`
                background-color: #fd7d24;
                color: white;
        `
        case "water":
            return css`
                background-color: #4592c4;
                color: white;
        `
        case "flying":
            return css`
                background: linear-gradient(180deg, #3dc7ef, #bdb9b8 70%);
                color: black;
        `
        case "electric":
            return css`
                background-color: #eed535;
                color: black;
        `
        case "normal":
            return css`
                background-color: #a4acaf;
                color: black;
        `
        case "fairy":
            return css`
                background-color: #fdb9e9;
                color: black;
        `
        case "bug":
            return css`
                background-color: #729f3f;
                color: white;
        `
        case "ground":
            return css`
                background: linear-gradient(180deg, #f7de3f, #ab9842 70%);;
                color: black;
        `
        case "fighting":
            return css`
                background-color: #d56723;
                color: white;
        `
        case "psychic":
            return css`
                background-color: #f366b9;
                color: white;
        `
        case "rock":
            return css`
                background-color: #a38c21;
                color: white;
        `
        case "steel":
            return css`
                background-color: #9eb7b8;
                color: white;
        `
        case "ice":
            return css`
                background-color: #51c4e7;
                color: black;
        `
        case "ghost":
            return css`
                background-color: #7b62a3;
                color: white;
        `
        case "dragon":
            return css`
                background: linear-gradient(180deg, #53a4cf, #f16e57 80%);
                color: white;
        `
        case "dark":
            return css`
                background-color: #707070;
                color: white;
        `    
      default:
        return css`
          background-color: white;
          color: black;
        `
    }
  }}
`