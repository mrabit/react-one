import React, { Component } from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import { Link } from 'react-router-dom';

export default class OneDetails extends Component {
  static propTypes = {
    oneInfo: PropTypes.object.isRequired,
    id: PropTypes.string.isRequired
  }
  render() {
    return (
      <div>
        <div className="one-img">
          <img className="img-full" src={this.props.oneInfo.img_url} alt="" />
        </div>
        <div className="wrapper">
          <p className="block clearfix">
            <span className="pull-left">{(this.props.oneInfo.share_info || {}).title}</span>
            <span className="pull-right">摄影 | {this.props.oneInfo.pic_info}</span>
          </p>
          <p className="text-center m-t">
            <span className="one-day ">
              {dayjs(this.props.oneInfo.post_date).format('DD')}
            </span>
            <span className="one-date m-t">
              {dayjs(this.props.oneInfo.post_date).format('MM.YYYY')}
            </span>
          </p>
          <span className="block one-line"></span>
          <p className="m-t one-forward">
            {this.props.oneInfo.forward}
          </p>
          <p className="text-muted font-xs m-t-xl text-center">
            {this.props.oneInfo.words_info}
          </p>
        </div>
        <div className="one-footer">
          <Link to={`/one/${parseInt(this.props.id) + 1}`}>上一篇</Link>
          <Link to={`/one/${parseInt(this.props.id) - 1}`}>下一篇</Link>
        </div>
      </div>
    )
  }
}