import React, { Component } from "react";
import Loader from "./Loader"

export class rss extends Component {
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
        this.setState({
          rssCasts: items.map((item) => ({
            image: item.querySelector("image").getAttribute("href"),
            title: item.children[0].textContent,
            episode: item.children[8].getAttribute("url"),
            description: item.children[6].textContent.replace(/<[^>]*>/g, ""),
          })),
        });
      });
  };
  render() {
    let rssFeed = this.state.rssCasts;
    if (rssFeed.children !== undefined) {
      return (
        <div>
          {/* {rssFeed.map(pod =>
            <div>
              <img src={pod.lastElementChild.getAttribute("href")} alt="" />
            </div>
          )} */}
        </div>
      );
    } else {
      return <Loader />
    }
  }
}
