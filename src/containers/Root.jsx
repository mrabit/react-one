import React, { Component } from 'react';
import Home from './Home';
import Header from './Header';
import Menus from './Menus';
import OneDetails from './OneDetails';
import OneList from './OneList';
import ArticleList from './ArticleList';
import ArticleDetails from './ArticleDetails';
import PageContainer from '../components/PageContainer';
import About from '../components/About';
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
          <Switch>
            <Route exact path="/article" component={ArticleList}></Route>
            <Route exact path="/article/:id" component={ArticleDetails}></Route>
          </Switch>
          <Route exact path="/about" component={About}></Route>
        </PageContainer>
      </Router>

    )
  }
}