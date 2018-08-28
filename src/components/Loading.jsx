import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Loading extends Component {
  static propTypes = {
    loading: PropTypes.bool.isRequired
  }
  render() {
    if (this.props.loading) {
      return (<div className="mask-content">
        <div className="mask-msg">
          <i className="iconfont icon-Loading icon-spin"></i>
        </div>
      </div>)
    }
    return null;
  }
}