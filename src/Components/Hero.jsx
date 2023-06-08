import React from 'react'
import {Container, HeroButton, HeroText } from "./Hero.styled"

const Hero = () => {
    const [count, setCount] = React.useState(0)
    const addButton = () => {
        setCount(count + 1) 
    }

    const subButton = () => {
        setCount(count - 1) 
    }

  return (
    <Container>
        <HeroButton onClick={subButton}>-</HeroButton>
        <HeroText>
            <h1>{count}</h1>
        </HeroText>
        <HeroButton onClick={addButton}>+</HeroButton>
    </Container>
  )
}

export default Hero
