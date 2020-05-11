import React, { Component } from 'react';
import { BrowserRouter, Link, useLocation } from 'react-router-dom';
import Footer from './Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/people.css'
import {Row, Container, Col} from 'reactstrap';
import HomeIcon from '@material-ui/icons/Home';
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import logoRect from "./logo_rec.png"
export class podList extends Component{

    constructor(props) {
        super(props);
        this.state = {
          podcast: [],
          currentListing: 0
        }
      }

    
      componentDidMount = () => {
        const data = {
          podcast: [
            {
              name: "Episode 1",
              id: 24,
              audio: "soundfile2"
            },
            {
              name: "Episode 2",
              id: 25,
              audio:"soundfile2"
            },

          ]
        }
        this.setState({ podcast: data })
      }
      render() {
        console.log(JSON.stringify(this.state.podcast.podcast))
        if (this.state.podcast.podcast) {
          console.log(this.state.podcast.podcast)
          return (
              <div className="main-style">
                <h1 className="titles title-color"><img src={logoRect} className="logo-rect"></img></h1>
                <NavBar></NavBar>
                <Pod info={this.state}></Pod>
                <Container>
                  <Row xs={1} md={3}>
                  {this.state.podcast.podcast.map(pod =>
                       <Col>
                        <Link style={{ textDecoration: 'none' }} key={pod.name} to={{pathname:`/pod/${pod.id}`, state: pod}} className="remove-underline"> 
                          <div className="basic">
                            <img src="" alt="Smiley face" className="episode-icon"/>
                            [{pod.name}] 
                          </div>
                        </Link>
                        {/* // set the literal value of the location object into the "to" prop */}
                    </Col>
                    )}
                  </Row> 
                </Container>
                    <Footer />
              </div>
            )
        } else {
          return (
            <p> NOT FOUND
    
            </p>
          )
        }
      }

}


export function Pod(props){
  console.log("we're in pod")
    let {state} = useLocation();
    console.log("State", {state})
    if(state !== undefined){
      if(state.audio !== undefined){
        console.log(state.audio)
      }
      return(
        <div>
          
        <div className="data-display"> 
          <NavBar></NavBar>
          {state.name}
          {/* <br></br>
          <Sound
          url="./ep1edit.wav" 
          playStatus={Sound.status.PLAYING}/> */}
          <br>
          </br>
          <br>
          </br>
        <audio controls>
          <source src={state.audio}></source>
        </audio>
        </div>
        <Footer />

        </div>
      )
    }
    else {
      return(
        <div>
        </div>
      )
    }
  }



  export function NavBar(){
    return(
      <div className="data-display">
        <SideNav  className="color-force">
          <SideNav.Toggle className="data-display"/>
          <SideNav.Nav defaultSelected="home">
            <NavItem eventKey="home" className="nav-colors">
              
              <NavIcon>
                <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} >
                  <Link to="/home"> 
                    <HomeIcon className="data-display"></HomeIcon>
                  </Link>
                </i>

              </NavIcon>
              <NavText>
                <Link  className="data-display"to="/home"> Home </Link>
              </NavText>
            </NavItem>
          </SideNav.Nav>
        </SideNav>
      </div>
    )
  }
