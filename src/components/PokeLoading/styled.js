import styled, { keyframes } from "styled-components"

export const load = keyframes`
    50% {
        transform: scale(0.7);
    }
`
export const PokeContainer = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const PokeBall = styled.div`
    height: 250px;
    width: 250px;
    border: 13px solid #383b4f;
    border-radius: 50%;
    background-image: linear-gradient(#f51939 125px, white 125px);
    position: relative;
    animation: ${load} 2s infinite;
    &::before {
        position: absolute;
        content: "";
        height: 25px;
        width: 225px;
        background-color: #383b4f;
        top: 110px;
    } &::after {
        position: absolute;
        content: "";
        height: 90px;
        width: 90px;
        background-image: radial-gradient(#fff 0px, #fff 10px, #383b4f 10px, #383b4f 15px, #fff 15px, #fff 32px, #383b4f 32px);
        border-radius: 50%;
        top: 70px;
        left: 70px;
    }
`
    
