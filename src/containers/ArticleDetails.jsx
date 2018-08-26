import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeTitle } from '../actions/header';
import Loading from '../components/Loading';
import { getArticleDetails } from '../actions/articleDetails';
import { Link } from 'react-router-dom';
import '../assets/Article.css';

class ArticleDetails extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    article: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired,
  }
  componentWillMount = _ => {
    const { dispatch, match } = this.props;
    dispatch(changeTitle('一个阅读'));
    dispatch(getArticleDetails(match.params.id));
  }
  componentWillReceiveProps = nextProps => {
    const { match: nextMatch } = nextProps;
    const { dispatch, match } = this.props;
    if (nextMatch.params.id !== match.params.id) {
      debugger
      dispatch(getArticleDetails(nextMatch.params.id));
    }
  }
  render() {
    let Details = null;
    if (!this.props.loading) {
      Details = (<div>
        <div className="padder">
          <p className="article-title">
            {this.props.article.hp_title}
          </p>
          <hr className="article-line" />
          <p className="article-author">
            文 | {this.props.article.hp_author}
          </p>
          <div className="article-content" dangerouslySetInnerHTML={{ __html: this.props.article.hp_content }}>
          </div>
          <p className="article-author-title">作者</p>
          <hr className="article-line" />
          <div className="article-author-list">
            {
              this.props.article.author && this.props.article.author.map((v, k) => {
                return (
                  <div className="article-author-items" key={k}>
                    <img src={v.web_url} alt="" />
                    <span className="block m-t">{v.user_name} <small>{v.wb_name}</small></span>
                    <span className="block">{v.desc}</span>
                  </div>
                )
              })
            }
          </div>
        </div>
        <div className="article-footer">
          <Link to={`/article/${parseInt(this.props.match.params.id) + 1}`}>上一篇</Link>
          <Link to={`/article/${parseInt(this.props.match.params.id) - 1}`}>下一篇</Link>
        </div>
      </div>);
    }
    return (
      <div className="container no-padder">
        {Details}
        <Loading loading={this.props.loading} />
      </div>
    )
  }
}


const mapStateToProps = state => {
  const { articleDetails, header } = state;
  return {
    article: articleDetails.data,
    loading: header.loading
  }
}

export default connect(mapStateToProps)(ArticleDetails);