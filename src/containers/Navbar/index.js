import React from 'react'
import { Container, NavLink } from './styles'

const Navbar = () => (
  <Container>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/friends">Friends</NavLink>
    <NavLink to="/PositiveMessages">Positive Messages</NavLink>
  </Container>
)

export default Navbar
