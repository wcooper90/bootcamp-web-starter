import React from 'react'
<<<<<<< HEAD
import ReactTextTransition, { presets } from "react-text-transition";
import {withRouter} from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

=======
import ReactTextTransition, { presets } from 'react-text-transition'
>>>>>>> fbaf13e... edited button style, added login form, started register form

import { Container } from './styles'


<<<<<<< HEAD
  return (
    <Container>
      <Row>
        <Col>
          <div>
            bruh1
          </div>
        </Col>
        <Col>
          <div>
            bruh2
          </div>
        </Col>
      </Row>
    </Container>
  )
}
=======
const Logout = () => (
  <div>
    <ReactTextTransition
      text="bruh "
      spring={presets.molasses}
      className="big"
      delay={800}
      inline
    />
      you just logged out. you fool.
  </div>
)
>>>>>>> fbaf13e... edited button style, added login form, started register form

export default Logout
