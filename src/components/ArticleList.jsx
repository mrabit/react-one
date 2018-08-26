import React, { Component } from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import { categoryMap } from '../config';
import ArticleLink from './ArticleLink';

export default class ArticleList extends Component {
  static propTypes = {
    articleList: PropTypes.array.isRequired,
    isArticle: PropTypes.bool
  }
  formatDate = date => {
    const temp = dayjs(date).format('MM月DD日');
    return dayjs(new Date()).format('MM月DD日') === temp ? '今天' : temp;
  }
  render() {
    return (
      <div>
        {
          this.props.articleList.filter(v => {
            // 一个阅读 列表 无问答,音乐,影视
            if (this.props.isArticle && v.category !== "1") {
              return false;
            }
            return categoryMap[v.category];
          }).map((v, k) => {
            return (
              <ArticleLink category={v.category} contentId={v.content_id} key={k}>
                <p className="text-center">
                  {/* tag_list有值取,没值取categoryMap配置 */}
                  - {v.tag_list.length ? v.tag_list[0].title : categoryMap[v.category]} -
                </p>
                <p className="article-list-title">{v.title}</p>
                <p className="article-list-author">文 / {v.author.user_name}</p>
                <img className="article-list-img" src={v.img_url} alt="" />
                <p className="m-b-sm">{v.forward}</p>
                <p className="article-list-time">
                  {this.formatDate(v.post_date)}
                </p>
              </ArticleLink>
            )
          })
        }
      </div>
    )
  }
}


