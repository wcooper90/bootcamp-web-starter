import React from 'react'
import { ApolloProvider } from '@apollo/react-hooks'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import styled, { ThemeProvider } from 'styled-components'
import theme from './theme'
import client from './client'
import Home from './containers/Home'
import Navbar from './containers/Navbar'
import Friends from './containers/Friends'




const AppWrapper = styled.div`
  min-height: 100vh;
  max-width: 100vw;
`


const App = () => (
  <Router>
    <ThemeProvider theme={theme}>
      <AppWrapper>
        <ApolloProvider client={client}>
          <div className="App">
            <Navbar>
              <Switch>
                <Route path="/" component={Home} />
                <Route path="/friends" component={Friends} />
              </Switch>
            </Navbar>
          </div>
        </ApolloProvider>
      </AppWrapper>
    </ThemeProvider>
  </Router>
)

export default App
