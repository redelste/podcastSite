import React, { Component } from 'react';

export class rss extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rssCasts: [],
      currentListing: 0
    }
  }

  componentDidMount = () => {
    fetch('https://feed.podbean.com/nintynine100/feed.xml')
      .then(response => response.text())
      .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
      .then(data => {
        console.log(data, "=====================================");

        const items = data.querySelectorAll("item");
        items.forEach(el => {
        console.log(el.querySelector("image"), "---------------------")
          let x = el.querySelector('image')
          x.getAttribute("href")
          console.log("xxxxxxxx", el)
          console.log("XXXXXXXXXXXX", x)
          this.setState({ rssCasts: el })
        });

        // document.body.insertAdjacentHTML("beforeend", html);
      })
    // .then.setState({rssCasts: data});
  }
  render() {
    console.log("the state", this.state)
    let rssFeed = this.state.rssCasts;
    console.log("RSS FEED HERE", rssFeed.innerHTML)
    console.log("TYPE OF RSSFEED", typeof rssFeed)
    console.log("RSS FEED", rssFeed)
    if (rssFeed.children !== undefined) {
      console.log("GETTING THE CHILDREN", rssFeed.lastElementChild.getAttribute("href"))
      return (
        <div>

          {/* {rssFeed.map(pod =>
            <div>
              <img src={pod.lastElementChild.getAttribute("href")} alt="" />
            </div>
          )} */}
        </div>
      )
    } else {


      return (
        <div>
          Loading...
        </div>
      )
    }

  }

}