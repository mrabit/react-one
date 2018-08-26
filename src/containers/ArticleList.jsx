import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { changeTitle } from '../actions/header';
import Loading from '../components/Loading';
import { connect } from 'react-redux';
import { changeCurrentDate, getArticleList } from '../actions/articleList';
import ArticleListCom from '../components/ArticleList';
import '../assets/Article.css';
import dayjs from 'dayjs';

class ArticleList extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
    articleList: PropTypes.array.isRequired,
    currentDate: PropTypes.string.isRequired
  }
  componentWillMount = _ => {
    const { dispatch, articleList } = this.props;
    const currentDate = dayjs(new Date()).subtract(5, 'day').format('YYYY-MM-DD');
    const dateArray = new Array(5).fill(0).map((v, k) => {
      return dayjs(new Date()).subtract(k, 'day').format('YYYY-MM-DD');
    });
    window.addEventListener('scroll', this.scrollFunc);
    dispatch(changeTitle('一个阅读'));
    if (!articleList.length) {
      dispatch(changeCurrentDate(currentDate));
      dispatch(getArticleList(dateArray));
    }
  }
  componentWillUnmount = _ => {
    window.removeEventListener('scroll', this.scrollFunc);
  }
  scrollFunc = _ => {
    const { currentDate, dispatch, loading } = this.props;
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
    if ((scrollHeight - currY) / 2 <= window.innerHeight && !loading) {
      const date = dayjs(currentDate).subtract(5, 'day').format('YYYY-MM-DD');
      const dateArray = new Array(5).fill(0).map((v, k) => {
        return dayjs(currentDate).subtract(k, 'day').format('YYYY-MM-DD');
      });
      dispatch(changeCurrentDate(date));
      dispatch(getArticleList(dateArray));
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
  const content_list = articleList.data || [];
  return {
    articleList: content_list.slice(1, content_list.length),
    currentDate: articleList.currentDate,
    loading: header.loading
  }
}

export default connect(mapStateToProps)(ArticleList);