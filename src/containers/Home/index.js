import React from 'react'
// import { Container, Row, Col } from 'react-bootstrap'

import 'bootstrap/dist/css/bootstrap.min.css'
import GetLaugh from './components/GetLaugh'
import AddEntries from './components/AddEntries'
import GetNews from './components/GoodNews'
import { HomeContainer, LeftSideContainer } from './styles'
// home page will have a gratitude journal and a 'get a laugh' section (preferably side-by-side?)
// it might also have a positive news section

// import the add entry and get a laugh components
// import the get all entries query from graphql


const Home = () => (
  <HomeContainer>
    <LeftSideContainer>
      <GetLaugh />
      <GetNews />
    </LeftSideContainer>
    <AddEntries />
    {' '}
    {/* // This is just here to test that the GetLaugh Component works */}
    {/* // include the add entry component here
            // map over all the entries data

            // include the get laugh component here */}

  </HomeContainer>
)


export default Home

/*
<BigText>
        <ReactTextTransition
          text="Welcome "
          spring={presets.molasses}
          className="big"
          delay={800}
          inline
        />
      </BigText>
*/
