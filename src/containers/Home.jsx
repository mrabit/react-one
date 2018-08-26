import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import '../assets/Home.css';
import { getArticleList, GET_HOME_INFO } from '../actions/articleList';
import { changeTitle } from '../actions/header';
import dayjs from 'dayjs';
import ArticleListCom from '../components/ArticleList';
import { Link } from "react-router-dom";

class Home extends Component {
  static propTypes = {
    date: PropTypes.string,
    firstScreen: PropTypes.object,
    infoList: PropTypes.array,
    dispatch: PropTypes.func
  }
  componentWillMount = _ => {
    const { dispatch } = this.props;
    dispatch(getArticleList([0], GET_HOME_INFO));
    dispatch(changeTitle('一个'));
  }
  render() {
    return (
      <div className="container no-padder bg">
        <div>
          {/* 首页 - 图文 */}
          <Link to={`/one/${this.props.firstScreen.item_id}`}>
            <img className="home-img" src={this.props.firstScreen.img_url} alt="" />
            <div className="home-mask">
              <div className="home-content">
                <p className="padder">
                  {dayjs(this.props.date).format('D')}
                </p>
                <p className="padder m-b-sm home-content-title">
                  {this.props.firstScreen.volume} | {dayjs(this.props.date).format('M.YYYY')}
                </p>
                <p className="padder m-b-lg home-content-title">
                  {this.props.firstScreen.forward}
                </p>
              </div>
            </div>
          </Link>
          <ArticleListCom articleList={this.props.articleList} />
        </div>
      </div >
    )
  }
}

const mapStateToProps = state => {
  const { home } = state;
  const content_list = home.data || [];
  return {
    date: home.data.date,
    firstScreen: content_list[0] || {},
    articleList: content_list.slice(1, content_list.length)
  };
}

export default connect(mapStateToProps)(Home);