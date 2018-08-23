import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { changeTitle } from '../actions/header';
import { getOneInfo } from '../actions/one';
import { connect } from 'react-redux';
import dayjs from 'dayjs';
import '../assets/One.css';

class One extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    oneInfo: PropTypes.object.isRequired
  }
  componentWillMount = _ => {
    const { dispatch, match } = this.props;
    dispatch(changeTitle('一个图文'));
    dispatch(getOneInfo(match.params.id));
  }
  render() {
    return (
      <div className="container no-padder">
        <img className="img-full" src={this.props.oneInfo.img_url} alt="" />
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
          <div>上一篇</div>
          <div>下一篇</div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { one } = state;
  console.log(one);
  return {
    oneInfo: one.data
  }
}

export default connect(mapStateToProps)(One);