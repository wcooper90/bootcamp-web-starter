import React from 'react'
import ReactTextTransition, { presets } from 'react-text-transition'
// import { Container, Row, Col } from 'react-bootstrap'
// import 'bootstrap/dist/css/bootstrap.min.css'
import { BigText } from '../../UI/bigtext'
import DisplayEntries from './components/DisplayEntries'
// import the add entry and get a laugh components

const Home = () => (
  <div>
    <BigText>
      <ReactTextTransition
        text="Welcome "
        spring={presets.molasses}
        className="big"
        delay={800}
        inline
      />
    </BigText>
    <DisplayEntries />
  </div>
)


export default Home

// home page will have a gratitude journal and a 'get a laugh' section (preferably side-by-side?) and it might also have a positive news section
// use the state hook to keep track of the current text the user is typing
