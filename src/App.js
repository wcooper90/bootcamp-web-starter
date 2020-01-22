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
import Welcome from './containers/Welcome'
import PositiveMessages from './containers/PositiveMessages'
import ParticlesBackground from './UI/particles.js';



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
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%"
            }}
          >
            <ParticlesBackground />
            <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%"
                }}
              >
                <Navbar />
                <Switch>
                  <Route path="/home" component={Home} />
                  <Route exact path="/" component={Welcome} />
                  <Route path="/friends" component={Friends} />
                  <Route path="/positiveMessages" component={PositiveMessages} />
                  <Route path="/logout" component={Logout} />
                </Switch>
              </div>
            </div>
          </div>
        </ApolloProvider>
      </AppWrapper>
    </ThemeProvider>
)

export default App
