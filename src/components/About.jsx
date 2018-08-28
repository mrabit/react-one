import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeTitle } from '../actions/header';

class About extends Component {
  static propTypes = {
    dispatch: PropTypes.func
  }
  componentWillMount = _ => {
    const { dispatch } = this.props;
    dispatch(changeTitle('关于'));
  }
  render() {
    return (
      <div className="container no-padder bg" style={{ minHeight: "calc(100vh - 3.125rem)" }}>
        <div className="wrapper">
          <img src="/img/one.png" className="block" alt="" style={{ width: '60px', margin: '15px auto' }} />
          该网站所以数据 均由 <a href="http://wufazhuce.com/">「ONE · 一个」</a> 提供，本人采取非正常手段获取，仅作为日常学习之用。获取跟共享的行为或许有侵犯权益的嫌疑。若被告知需停止共享与使用，本人会及时删除此页面与整个项目。
        </div>
      </div>
    )
  }
}

export default connect()(About);