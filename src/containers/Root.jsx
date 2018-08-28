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
import NotFound from '../components/NotFound';
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
          <Switch>
            {/* 首页 */}
            <Route exact path="/" component={Home} />
            {/* 图文 */}
            <Route exact path="/one" component={OneList} />
            <Route exact path="/one/:id" component={OneDetails} />
            {/* 阅读 */}
            <Route exact path="/article" component={ArticleList}></Route>
            <Route exact path="/article/:id" component={ArticleDetails}></Route>
            {/* 关于 */}
            <Route exact path="/about" component={About}></Route>
            {/* 404 */}
            <Route component={NotFound}></Route>
          </Switch>
        </PageContainer>
      </Router>

    )
  }
}