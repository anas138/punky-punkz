import React from 'react'
import { Container,Row,Col } from "react-bootstrap";
import {Link} from "react-router-dom"

function Header() {
  return (
    <Container fluid>
      
       <Container>
            <Row>
                <Col>  <a href="#home">Home</a> </Col>
                <Col><a href="#roadmap">Roadmap</a> </Col>
                <Col><a href="#team">Team</a></Col>
            </Row>
        </Container>
        

    </Container>
  )
}

export default Header