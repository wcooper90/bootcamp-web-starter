import React from 'react'
import { BigText } from '../../UI/bigtext.js'
import ReactTextTransition, { presets } from "react-text-transition";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

const Home = () => {


  return (
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
}

export default Home
