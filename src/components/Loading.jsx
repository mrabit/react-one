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
          <i className="fa fa-spinner fa-spin fa-fw"></i>加载中...
      </div>
      </div>)
    }
    return null;
  }
}