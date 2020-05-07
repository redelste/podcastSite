import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { podList, Pod } from './components/people'
import { About} from './components/about'
import { rss } from './components/rss';

const App = () => (
  <div>
    <Router>
      <div>
        <Route path="/home" exact component={podList} />
        <Route path="/about" exact component={About}/>
        <Route path="/pod/:id" exact component={Pod} />
        <Route path="/pods/" exact component={rss} />
      </div>
    </Router>

  </div>
)

export default App;