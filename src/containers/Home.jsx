import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import '../assets/Home.css';
import { getInfo } from '../actions/home';
import { changeTitle } from '../actions/header';
import dayjs from 'dayjs';
import InfoList from '../components/InfoList';
import { Link } from "react-router-dom";

class Home extends Component {
  static propTypes = {
    date: PropTypes.string,
    firstScreen: PropTypes.object,
    infoList: PropTypes.array,
    categoryMap: PropTypes.object,
    dispatch: PropTypes.func
  }
  componentWillMount = _ => {
    const { dispatch } = this.props;
    dispatch(getInfo());
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
          <InfoList categoryMap={this.props.categoryMap} infoList={this.props.infoList} />
        </div>
      </div >
    )
  }
}

const mapStateToProps = state => {
  const { home } = state;
  const content_list = home.data.content_list || [];
  return {
    date: home.data.date,
    firstScreen: content_list[0] || {},
    infoList: content_list.slice(1, content_list.length),
    categoryMap: {
      "1": "ONE STORY",
      "2": "连载",
      "3": "问答",
      "4": "音乐",
      "5": "影视",
    }
  };
}

export default connect(mapStateToProps)(Home);