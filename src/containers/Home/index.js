import React from 'react'
import ReactTextTransition, { presets } from 'react-text-transition'
// import { Container, Row, Col } from 'react-bootstrap'

import 'bootstrap/dist/css/bootstrap.min.css'
import { BigText } from '../../UI/bigtext'

const Home = () => (
  <BigText>
    <ReactTextTransition
      text="Welcome "
      spring={presets.molasses}
      className="big"
      delay={800}
      inline
    />
  </BigText>
)

export default Home
