import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { changeTitle } from '../actions/header';
import { connect } from 'react-redux';

class NotFound extends Component {
  static propTypes = {
    dispatch: PropTypes.func
  }
  componentWillMount = _ => {
    const { dispatch } = this.props;
    dispatch(changeTitle('对不起，没有找到这个页面'));
  }
  render() {
    return (
      <div className="container no-padder">
        <div className="wrapper">
          <h4>对不起，没有找到这个页面</h4>
          <p>
            看来你来到了一个渺无人烟的所在。<a href="javascript:history.back();">回去吧</a>。
          </p>
        </div>
      </div>
    )
  }
}

export default connect()(NotFound);