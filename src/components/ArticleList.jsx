import React, { Component } from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import { Link } from 'react-router-dom';

export default class ArticleList extends Component {
  static propTypes = {
    articleList: PropTypes.array.isRequired,
    isArticle: PropTypes.bool
  }
  formatDate = date => {
    const temp = dayjs(date).format('YYYY年MM月DD日');
    return dayjs(new Date()).format('YYYY年MM月DD日') === temp ? '今天' : temp;
  }
  render() {
    return (
      <div>
        {
          this.props.articleList.map((v, k) => {
            return (
              <Link to={`/article/${v.id}`} className="m-t-xs bg-white wrapper block" key={k}>
                <p className="text-center">
                  {/* tag_list有值取,没值取categoryMap配置 */}
                  - {v.tag_list.length ? v.tag_list[0].title : '阅读'} -
                </p>
                <p className="article-list-title">{v.title}</p>
                <p className="article-list-author">文 / {v.author_list.map(v => v.user_name).join(',')}</p>
                <div className="article-list-img">
                  <img src={v.img_url} alt="" />
                </div>
                <p className="m-b-sm">{v.guide_word}</p>
                <p className="article-list-time">
                  {this.formatDate(v.post_date)}
                </p>
              </Link>
            )
          })
        }
      </div>
    )
  }
}


