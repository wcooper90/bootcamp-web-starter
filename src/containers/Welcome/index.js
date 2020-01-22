import React from 'react'
import { BigText, BigText2 } from '../../UI/bigtext.js'
import { Button } from '../../UI/button.js'
import ReactTextTransition, { presets } from "react-text-transition";
import { NavLink as link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';


const Welcome = () => {


  return (
    <Container>
      <Row>
        <Col>
          <br />
          <br />
        </Col>
      </Row>
      <Row>
        <BigText>
          <ReactTextTransition
                  text="Welcome "
                  spring={presets.molasses}
                  className="big"
                  delay={800}
                  inline
                  overflow
                />
        </BigText>
      </Row>
      <Row>
        <Col>
        </Col>
        <Col>
          <BigText2>
          <ReactTextTransition
                  text="to your happy place"
                  spring={presets.molasses}
                  className="medium"
                  delay={1700}
                  direction="down"
                  overflow
                />
          </BigText2>
        </Col>
        <Col>
          <br />
          <br />
          <br />
          <br />
          <Button>
            <nav>
              <a href="/home">Take me --></a><span></span><span></span><span></span><span></span>
            </nav>
          </Button>
        </Col>
        <Col>
        </Col>
      </Row>
    </Container>
  )
}

export default Welcome
