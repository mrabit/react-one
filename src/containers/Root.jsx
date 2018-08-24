import React, { Component } from 'react';
import Home from './Home';
import Header from './Header';
import Menus from './Menus';
import OneDetails from './OneDetails';
import OneList from './OneList';
import PageContainer from '../components/PageContainer';
import {
  BrowserRouter as Router,
  Route, Switch
} from 'react-router-dom'

export default class Root extends Component {
  render() {
    return (
      <Router>
        <PageContainer>
          <Header />
          <Menus />
          {/* 首页 */}
          <Route exact path="/" component={Home} />
          {/* 图文 */}
          <Switch>
            <Route exact path="/one" component={OneList} />
            <Route path="/one/:id" component={OneDetails} />
          </Switch>
          {/* 阅读 */}
          {/* <Route path="/article" component={Topics} /> */}
        </PageContainer>
      </Router>

    )
  }
}