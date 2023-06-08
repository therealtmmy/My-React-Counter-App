import { styled } from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: black;
    height: 100vh;
    color: white;
`

export const HeroButton = styled.button`
    border-radius: 20em;
    background-color: grey;
    width: 50px;
    height: 50px;
    border: none;
    font-size: 30px;
    font-weight: 700;
    color: white;
    cursor: pointer;
    z-index: 1
`

export const HeroText = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20em;
    color: black;
    background-color: white;
    width: 130px;
    height: 130px;
    font-size: 30px;
    margin-bottom: 60px;
    margin-left: -0.7em;
    margin-right: -0.7em;
`