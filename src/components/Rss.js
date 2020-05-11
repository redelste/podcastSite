import React, { Component } from "react";
import Loader from "./Loader"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/people.css'
import { Row, Container, Col } from 'reactstrap';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import Navbar from "./Navbar"
import logoRect from "./logo_rec.png"
import { Link } from "react-router-dom";
export class Rss extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rssCasts: [],
      currentListing: 0,
    };
  }

  componentDidMount = () => {
    fetch(process.env.REACT_APP_PODCAST_URL)
      .then((response) => response.text())
      .then((str) => new window.DOMParser().parseFromString(str, "text/xml"))
      .then((data) => {
        const items = Array.from(data.querySelectorAll("item"));
        console.log(items)
        this.setState({
          rssCasts: items.map((item) => ({
            image: item.querySelector("image").getAttribute("href"),
            title: item.children[0].textContent,
            episode: item.children[8].getAttribute("url"),
            description: item.children[6].textContent.replace(/<[^>]*>/g, ""),
            pubDate: item.children[4].innerHTML
          })),
          // currentListing : 
        });
      });
  };
  render() {
    let rssFeed = this.state.rssCasts;
    console.log(rssFeed)
    if (rssFeed !== undefined) {
      return (
        <div className="main-style">
          <h1 className="titles title-color"><img src={logoRect} className="logo-rect"></img></h1>
          <Navbar />
          <Container>
            <Row xs={1} md={3}>
              {rssFeed.map(pod =>
                <Col>
                  <Link style={{ textDecoration: 'none' }} key={pod.title} to={{ pathname: `/pod/${pod.title}`, state: pod }}>
                    <div>
                      <img src={pod.image} alt="" key={pod.pubDate} className="episode-icon" />
                      [{pod.title}]
                    </div>
                  </Link>
                </Col>
              )}
            </Row>
          </Container>
        </div>
      );
    } else {
      return <Loader />
    }
  }
}
