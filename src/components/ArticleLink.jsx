import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class Items extends Component {
  static propTypes = {
    category: PropTypes.string.isRequired,
    contentId: PropTypes.string
  }
  render() {
    if (this.props.category === "1") {
      return (
        <Link to={`/article/${this.props.contentId}`} className="m-t-xs bg-white wrapper block" style={{ minHeight: '200px' }}>
          {this.props.children}
        </Link>
      )
    } else {
      return (
        <div className="m-t-xs bg-white wrapper" style={{ minHeight: '200px' }}>
          {this.props.children}
        </div>
      )
    }
  }
}