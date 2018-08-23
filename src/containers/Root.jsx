import React, { Component } from 'react';
import Home from './Home';
import Header from './Header';
import Menus from './Menus';
import One from './One';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

export default class Root extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Menus />
          {/* 首页 */}
          <Route exact path="/" component={Home} />
          {/* 图文 */}
          <Route path="/one/:id" component={One} />
          {/* 阅读 */}
          {/* <Route path="/article" component={Topics} /> */}
        </div>
      </Router>

    )
  }
}