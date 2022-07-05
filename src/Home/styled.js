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
`
export const TypesContainer = styled.div`
`
export const PokemonType = styled.p`
    text-align: center;
    ${(props) => {
    switch (props.children) {
        case "Grass":
            return css`
                background-color: #9bcc50;
                color: black;
        `
        case "Poison":
            return css`
                background-color: #b97fc9;
                color: white;
        `
        case "Fire":
            return css`
                background-color: #fd7d24;
                color: white;
        `
        case "Water":
            return css`
                background-color: #4592c4;
                color: white;
        `
        case "Flying":
            return css`
                background: linear-gradient(180deg, #3dc7ef, #bdb9b8 70%);
                color: black;
        `
        case "Electric":
            return css`
                background-color: #eed535;
                color: black;
        `
        case "Normal":
            return css`
                background-color: #a4acaf;
                color: black;
        `
        case "Fairy":
            return css`
                background-color: #fdb9e9;
                color: black;
        `
        case "Bug":
            return css`
                background-color: #729f3f;
                color: white;
        `
        case "Ground":
            return css`
                background: linear-gradient(180deg, #f7de3f, #ab9842 70%);;
                color: black;
        `
        case "Fighting":
            return css`
                background-color: #d56723;
                color: white;
        `
        case "Psychic":
            return css`
                background-color: #f366b9;
                color: white;
        `
        case "Rock":
            return css`
                background-color: #a38c21;
                color: white;
        `
        case "Steel":
            return css`
                background-color: #9eb7b8;
                color: white;
        `
        case "Ice":
            return css`
                background-color: #51c4e7;
                color: black;
        `
        case "Ghost":
            return css`
                background-color: #7b62a3;
                color: white;
        `
        case "Dragon":
            return css`
                background: linear-gradient(180deg, #53a4cf, #f16e57 80%);
                color: white;
        `
        case "Dark":
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