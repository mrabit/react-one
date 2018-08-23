import React, { Component } from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';

export default class InfoList extends Component {
  static propTypes = {
    infoList: PropTypes.array,
    categoryMap: PropTypes.object
  }
  formatDate = date => {
    const temp = dayjs(date).format('MM月DD日');
    return dayjs(new Date()).format('MM月DD日') === temp ? '今天' : temp;
  }
  render() {
    return (
      <div>
        {
          this.props.infoList.filter(v => this.props.categoryMap[v.category]).map((v, k) => (
            <div key={k} className="m-t-xs bg-white wrapper" style={{ minHeight: '200px' }}>
              <p className="text-center">
                - {this.props.categoryMap[v.category]} -
              </p>
              <p className="home-info-list-title">{v.title}</p>
              <p className="home-info-list-author">文 / {v.author.user_name}</p>
              <img className="home-info-list-img" src={v.img_url} alt="" />
              <p className="m-b-sm">{v.forward}</p>
              <p className="home-info-list-time">
                {this.formatDate(v.post_date)}
              </p>
            </div>
          ))
        }
      </div>
    )
  }
}