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
      dispatch(getArticleDetails(nextMatch.params.id));
    }
  }
  render() {
    let Details = null;
    if (!this.props.loading) {
      Details = (<div>
        <div className="padder">
          <p className="article-title">
            {this.props.article.title}
          </p>
          <hr className="article-line" />
          <p className="article-author">
            文 | {this.props.article.author_list.map(v => v.user_name).join(',')}
          </p>
          <div className="article-content" dangerouslySetInnerHTML={{ __html: this.props.article.content }}>
          </div>
          <p className="text-muted text-xs m-t">{this.props.article.author_introduce}</p>
          <p className="text-muted text-xs m-t">{this.props.article.copyright}</p>
          <p className="article-author-title">作者</p>
          <hr className="article-line" />
          <div className="article-author-list">
            {
              this.props.article.author_list && this.props.article.author_list.map((v, k) => {
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
          <LinkOrP id={this.props.article.prev}>上一篇</LinkOrP>
          <LinkOrP id={this.props.article.next}>下一篇</LinkOrP>
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

class LinkOrP extends Component {
  static propTypes = {
    id: PropTypes.number
  }
  render() {
    if (typeof this.props.id === "undefined") {
      return <p>{this.props.children}</p>
    } else {
      return <Link to={`/article/${this.props.id}`}>{this.props.children}</Link>
    }
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