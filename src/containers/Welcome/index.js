import React from 'react'
import ReactTextTransition, { presets } from 'react-text-transition'
import { NavLink as link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Show } from './styles'


const Welcome = () => {


  return (
    <div>
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
          <Show>
            <Button id='mybutton'>
              <nav>
                <a href="/home">Cheer me up!</a><span></span><span></span><span></span><span></span>
              </nav>
            </Button>
          </Show>
        </Col>
        <Col>
        </Col>
      </Row>
    </Container>
    </div>
  )
}

export default Welcome
