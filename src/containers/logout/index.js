import React from 'react'
import ReactTextTransition, { presets } from "react-text-transition";
import {withRouter} from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';



const Logout = () => {

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

export default withRouter(Logout)
