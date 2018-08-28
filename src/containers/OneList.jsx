import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { changeTitle } from '../actions/header';
import { getOneList } from '../actions/oneList';
import { connect } from 'react-redux';
import '../assets/One.css';
import Loading from '../components/Loading';
import OneListCom from '../components/OneList';

class OneList extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    oneList: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    currentPage: PropTypes.number.isRequired,
    totalPage: PropTypes.number.isRequired,
  }
  componentWillMount = _ => {
    const { dispatch, oneList } = this.props;
    window.addEventListener('scroll', this.scrollFunc);
    dispatch(changeTitle('一个图文'));
    if (!oneList.length) {
      dispatch(getOneList(1));
    }
  }
  componentWillUnmount = _ => {
    window.removeEventListener('scroll', this.scrollFunc);
  }
  scrollFunc = _ => {
    const { currentPage, totalPage, dispatch, loading } = this.props;
    // 当前高度
    var currY =
      window.pageYOffset || //用于FF
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    var scrollHeight =
      document.documentElement.scrollHeight ||
      document.body.scrollHeight ||
      0;
    console.log(scrollHeight, currY, (scrollHeight - currY) / 2, window.innerHeight);
    if ((scrollHeight - currY) / 2 <= window.innerHeight && !loading && currentPage < totalPage) {
      dispatch(getOneList(currentPage + 1));
    }
  }
  render() {
    return (
      <div className="container no-padder bg">
        <OneListCom oneList={this.props.oneList} />
        <Loading loading={this.props.loading} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { oneList, header } = state;
  return {
    oneList: oneList.data,
    loading: header.loading,
    currentPage: oneList.currentPage,
    totalPage: oneList.totalPage
  }
}

export default connect(mapStateToProps)(OneList);