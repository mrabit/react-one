import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { changeTitle } from '../actions/header';
import Loading from '../components/Loading';
import { connect } from 'react-redux';
import { getArticleList } from '../actions/articleList';
import ArticleListCom from '../components/ArticleList';
import '../assets/Article.css';

class ArticleList extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
    articleList: PropTypes.array.isRequired,
    currentPage: PropTypes.number.isRequired,
    totalPage: PropTypes.number.isRequired,
  }
  componentWillMount = _ => {
    const { dispatch, articleList } = this.props;
    document.title = "阅读 - 「ONE · 一个」";
    window.addEventListener('scroll', this.scrollFunc);
    dispatch(changeTitle('一个阅读'));
    if (!articleList.length) {
      dispatch(getArticleList(1));
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
      dispatch(getArticleList(currentPage + 1));
    }
  }
  render() {
    return (
      <div className="container no-padder bg">
        <ArticleListCom articleList={this.props.articleList} isArticle={true} />
        <Loading loading={this.props.loading} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { articleList, header } = state;
  return {
    articleList: articleList.data,
    currentPage: articleList.currentPage,
    totalPage: articleList.totalPage,
    loading: header.loading
  }
}

export default connect(mapStateToProps)(ArticleList);