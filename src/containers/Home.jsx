import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import '../assets/Home.css';
import { getHomeInfo } from '../actions/home';
import { changeTitle } from '../actions/header';
import Loading from '../components/Loading';
import dayjs from 'dayjs';
import ArticleListCom from '../components/ArticleList';
import { Link } from "react-router-dom";

class Home extends Component {
  static propTypes = {
    firstScreen: PropTypes.object,
    infoList: PropTypes.array,
    dispatch: PropTypes.func,
    loading: PropTypes.bool.isRequired,
  }
  componentWillMount = _ => {
    const { dispatch } = this.props;
    dispatch(getHomeInfo());
    dispatch(changeTitle('一个'));
  }
  render() {
    let HomeTag = null;
    if (!this.props.loading) {
      HomeTag = (
        <div>
          {/* 首页 - 图文 */}
          <Link to={`/one/${this.props.firstScreen.id}`}>
            <img className="home-img" src={this.props.firstScreen.img_url} alt="" />
            <div className="home-mask">
              <div className="home-content">
                <p className="padder">
                  {dayjs(this.props.firstScreen.post_date).format('D')}
                </p>
                <p className="padder m-b-sm home-content-title">
                  {this.props.firstScreen.volume} | {dayjs(this.props.firstScreen.post_date).format('MM.YYYY')}
                </p>
                <p className="padder m-b-lg home-content-title">
                  {this.props.firstScreen.forward}
                </p>
              </div>
            </div>
          </Link>
          <ArticleListCom articleList={this.props.articleList} />
        </div>
      )
    }
    return (
      <div className="container no-padder bg">
        {HomeTag}
        <Loading loading={this.props.loading} />
      </div >
    )
  }
}

const mapStateToProps = state => {
  const { home, header } = state;
  const content_list = home.data || [];
  return {
    firstScreen: content_list[0] || {},
    articleList: content_list.slice(1, content_list.length),
    loading: header.loading
  };
}

export default connect(mapStateToProps)(Home);