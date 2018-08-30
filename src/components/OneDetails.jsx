import React, { Component } from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import { Link } from 'react-router-dom';

export default class OneDetails extends Component {
  static propTypes = {
    oneInfo: PropTypes.object.isRequired,
    id: PropTypes.string.isRequired
  }
  componentWillMount = _ => {
    this.props.oneInfo.volume && (document.title = this.props.oneInfo.volume + " - 「ONE · 一个」");
  }
  render() {
    return (
      <div className="m-b-xxl">
        <div className="one-img">
          <img className="img-full" src={this.props.oneInfo.img_url} alt="" />
        </div>
        <div className="wrapper">
          <p className="block clearfix">
            <span className="pull-left">{this.props.oneInfo.volume}</span>
            <span className="pull-right">{this.props.oneInfo.title}{
              this.props.oneInfo.pic_info ? ' | ' + this.props.oneInfo.pic_info : ''
            }</span>
          </p>
          <p className="text-center m-t">
            <span className="one-day ">
              {dayjs(this.props.oneInfo.post_date).format('DD')}
            </span>
            <span className="one-date m-t">
              {dayjs(this.props.oneInfo.post_date).format('MMM.YYYY')}
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
          <LinkOrP id={this.props.oneInfo.prev}>上一篇</LinkOrP>
          <LinkOrP id={this.props.oneInfo.next}>下一篇</LinkOrP>
        </div>
      </div>
    )
  }
}

class LinkOrP extends Component {
  static propTypes = {
    id: PropTypes.number
  }
  render() {
    if (typeof this.props.id === "undefined") {
      return <p>{this.props.children}</p>
    } else {
      return <Link to={`/one/${this.props.id}`}>{this.props.children}</Link>
    }
  }
}