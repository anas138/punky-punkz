import React from "react"
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Row,Col } from "react-bootstrap";
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import Home from "./componenets/Home"
import Header from "./componenets/Header"
import Team from "./componenets/Team"
import RoadMap from "./componenets/Roadmap"


import  "./App.css"
// import "./componenets/styles/index.scss"


function App() {
  return (
    
    
      <Container fluid>
           <Header/>
           <Home />
           <RoadMap />
           <Team />
      </Container>
    
  );
}

export default App;
