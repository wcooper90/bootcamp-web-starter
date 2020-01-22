import React from 'react'
import { Container, NavLink } from './styles'

const Navbar = () => (
  <Container>
<<<<<<< HEAD
    <img src='./cheermeuplogo.png' alt='bruh' width='160px'/>
    <br/>
    <NavLink to='/'></NavLink>
    <NavLink to="/home">Home</NavLink>
=======
    <img src="./cheermeuplogo.png" alt="bruh" width="160px" />
    <br />
    <NavLink to="/" />
    <NavLink to="/">Home</NavLink>
>>>>>>> fbaf13e... edited button style, added login form, started register form
    <NavLink to="/friends">Friends</NavLink>
    <NavLink to="/PositiveMessages">Positive Messages</NavLink>
    <NavLink to="/logout">Logout</NavLink>

  </Container>
)

export default Navbar
