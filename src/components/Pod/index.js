import styles from "./pod.module.css"
// import Navbar from "./components/Navbar"
import React, { Component } from 'react';
import { BrowserRouter, Link, useLocation } from 'react-router-dom';
import Footer from '../Footer'
import Navbar from '../Navbar'
import { Row, Container, Col } from 'reactstrap';
import logoRect from "../logo_rec.png"

export default function Pod(props) {
  console.log("we're in pod", props)
  let { state } = useLocation();
  console.log("State", { state })
  if (state !== undefined) {
    if (state.audio !== undefined) {
      console.log(state.audio)
    }
    return (
      <div>
        <div className={styles.dataDisplay}>
        {/* <h1 className="titles title-color"><img src={logoRect} className="logo-rect"></img></h1> */}
          <Container>
            
            <br></br>
            <Navbar />
            <Row>
              <Col sm="12" md={{ size: 10, offset: 1 }}>
                <h2>{state.title}</h2>
              </Col>
            </Row>
            <br></br>
            <Row>
              <Col>
                <audio controls>
                  <source src={state.episode}></source>
                </audio>
              </Col>
            </Row>
            <br></br>
            <h3 className={styles.greenColor}>Description</h3>
            <Row>
              <Col sm="12" md={{ size: 20 }} className={styles.pBackground}>
                {state.description}
              </Col>
            </Row>
          </Container>
        </div>
        <Footer />

      </div>
    )
  }
  else {
    return (
      <div>
      </div>
    )
  }
}
