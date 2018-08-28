import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import cs from 'classname';
import '../assets/Header.css';
import { toggleMenu } from '../actions/menus';
import { toggleSearch } from '../actions/header';



class Header extends Component {
  static propTypes = {
    isOpen: PropTypes.bool,
    dispatch: PropTypes.func
  }
  handleClickMenu = _ => {
    const { dispatch } = this.props;
    dispatch(toggleMenu());
  }
  handleClickSreachPanel = _ => {
    const { dispatch } = this.props;
    dispatch(toggleSearch());
    setTimeout(_ => this.inputRef.focus(), 0);
  }
  render() {
    return (
      <div>
        <div className="header text-center">
          <div className="pull-left inline menu-icon" onClick={this.handleClickMenu}>
            <i className="iconfont icon-menu"></i>
          </div>
          <p className="inline header-title">{this.props.title}</p>
          <div className="pull-right inline menu-icon" style={{ visibility: "hidden" }} onClick={this.handleClickSreachPanel}>
            <i className="iconfont icon-sousuo search-btn"></i>
          </div>
        </div>
        <div className={cs({ "search-panel": true, "search-panel-open": this.props.isOpen })}>
          <div className="search-panel-content">
            <div className="search-input">
              <input type="text" ref={e => this.inputRef = e} className="inline" placeholder="输入作者或标题关键字" />
            </div>
            <div className="search-btn-group">
              <i className="iconfont icon-sousuo search-btn"></i>
              <i className="iconfont icon-cuowu search-close" onClick={this.handleClickSreachPanel}></i>
            </div>
          </div>
        </div>
        <div onClick={this.handleClickSreachPanel} className={cs({ "search-panel-mask": true, "search-panel-open": this.props.isOpen })}></div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { header } = state;
  return {
    isOpen: header.isOpen,
    title: header.title
  }
}


export default connect(mapStateToProps)(Header);