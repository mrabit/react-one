import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { toggleMenu } from '../actions/menus';
import cs from 'classname';
import '../assets/Menus.css';
import { Link } from 'react-router-dom';

class Menus extends Component {
  static propTypes = {
    isOpen: PropTypes.bool,
    dispatch: PropTypes.func
  }
  handleClickCloseMenus = _ => {
    const { dispatch } = this.props;
    dispatch(toggleMenu());
  }
  render() {
    return (
      <div>
        <div className={cs({ "menus": true, "menus-open": this.props.isOpen })}>
          <ul className="menus-list">
            <li className="menus-list-item">
              <Link to="/one" onClick={this.handleClickCloseMenus}>图文</Link>
            </li>
            <li className="menus-list-item">阅读</li>
            <li className="menus-list-item">音乐</li>
            <li className="menus-list-item">影视</li>
            <li className="menus-list-item">关于</li>
          </ul>
        </div>
        <div className={cs({ "menus-mask": true, "menus-open": this.props.isOpen })} onClick={this.handleClickCloseMenus}></div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    isOpen: state.menus.isOpen
  }
}

export default connect(mapStateToProps)(Menus);

