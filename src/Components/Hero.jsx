import React from 'react'
import {Container, HeroButton, HeroText } from "./Hero.styled"

const Hero = () => {
  return (
    <Container>
        <HeroButton>-</HeroButton>
        <HeroText>
            <h1>0</h1>
        </HeroText>
        <HeroButton>+</HeroButton>
    </Container>
  )
}

export default Hero
