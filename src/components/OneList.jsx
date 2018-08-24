import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';

export default class OneList extends Component {
  static propTypes = {
    oneList: PropTypes.array.isRequired
  }
  render() {
    return (
      <div>
        {
          this.props.oneList.map((v, k) => {
            return (
              <div className="one-list-items" key={k}>
                <Link to={`/one/${v.hpcontent_id}`}>
                  <p className="text-center one-list-date">{dayjs(v.hp_makettime).format("YYYY / MM / DD")}</p>
                  <p className="text-center text-xs m-b">{v.hp_title}</p>
                  <img className="one-list-img" src={v.hp_img_url} alt="" />
                  <p className="text-center text-xs">{v.hp_author}</p>
                  <p className="wrapper">{v.hp_content}</p>
                  <p className="text-center text-xs">{v.text_authors}</p>
                </Link>
              </div>
            )
          })
        }
      </div>
    )
  }
}