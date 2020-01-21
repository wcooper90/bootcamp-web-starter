import React from 'react'
import { ApolloProvider } from '@apollo/react-hooks'
import { Switch, Route } from 'react-router-dom'
import styled, { ThemeProvider } from 'styled-components'
import theme from './theme'
import client from './client'
import Home from './containers/Home'
import Navbar from './containers/Navbar'
import Friends from './containers/Friends'
import Logout from './containers/logout'
import PositiveMessages from './containers/PositiveMessages'
import Particles from 'react-particles-js';



const AppWrapper = styled.div`
  min-height: 100vh;
  max-width: 100vw;
  background-color: ${({ theme }) => theme.colors.lightLilac};
`


const App = () => (
    <ThemeProvider theme={theme}>
      <AppWrapper>
        <ApolloProvider client={client}>
          <div className="App">
            <Navbar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/friends" component={Friends} />
              <Route path="/positiveMessages" component={PositiveMessages} />
              <Route path="/logout" component={Logout} />
            </Switch>
            <Particles
              params={{
                "particles": {
                    "number": {
                        "value": 160,
                        "density": {
                            "enable": false
                        }
                    },
                    "size": {
                        "value": 6,
                        "random": true,
                        "anim": {
                            "speed": 4,
                            "size_min": 2
                        }
                    },
                    "line_linked": {
                        "enable": false,
                    },
                    "move": {
                        "random": true,
                        "speed": 1,
                        "direction": "top",
                        "out_mode": "out"
                    }
                },
                "interactivity": {
                    "events": {
                        "onhover": {
                            "enable": true,
                            "mode": "bubble"
                        },
                        "onclick": {
                            "enable": true,
                            "mode": "repulse"
                        }
                    },
                    "modes": {
                        "bubble": {
                            "distance": 250,
                            "duration": 2,
                            "size": 0,
                            "opacity": 0
                        },
                        "repulse": {
                            "distance": 400,
                            "duration": 4
                        }
                    }
                }
            }} />
          </div>
        </ApolloProvider>
      </AppWrapper>
    </ThemeProvider>
)

export default App
