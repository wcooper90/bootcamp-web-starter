import React from 'react'
import { Container, NavLink } from './styles'

const Navbar = () => (
  <Container>
    <img src="./cheermeuplogo.png" alt="bruh" width="160px" />
    <br />
    <NavLink to="/" />
    <NavLink to="/home">Home</NavLink>
    <NavLink to="/friends">Friends</NavLink>
    <NavLink to="/PositiveMessages">Positive Messages</NavLink>
    <NavLink to="/logout">Logout</NavLink>

  </Container>
)

export default Navbar
