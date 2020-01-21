import React from 'react'
import { Container, NavLink } from './styles'

const Navbar = () => (
  <Container>
    <img src='./cheermeuplogo.png' alt='bruh' width='160px'/>
    <br/>
    <NavLink to="/" src='./cheermeuplogo.png' alt='bruh' width='140px'></NavLink>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/friends">Friends</NavLink>
    <NavLink to="/PositiveMessages">Positive Messages</NavLink>
  </Container>
)

export default Navbar
