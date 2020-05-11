import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// import { podList } from './components/people'
import { Rss } from './components/Rss';
import Pod from './components/Pod'
const App = props => (
  <div>
    <Router>
      <div>
        {/* <Route path="/about" exact component={About}/> */}
        <Route path="/pod/:title" exact component={Pod} />
        <Route path="/pods/" exact component={Rss} />
      </div>
    </Router>

  </div>
)

export default App;