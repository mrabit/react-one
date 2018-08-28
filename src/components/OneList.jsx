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
                <Link to={`/one/${v.id}`}>
                  <p className="text-center one-list-date">{dayjs(v.post_date).format("YYYY / MM / DD")}</p>
                  <p className="text-center text-xs m-b-sm m-t-sm">{v.volume}</p>
                  <div className="one-img m-b">
                    <img src={v.img_url} alt="" />
                  </div>
                  <p className="text-center text-xs">{`${v.title} | ${v.pic_info}`}</p>
                  <p className="wrapper">{v.forward}</p>
                  <p className="text-center text-xs">{v.words_info}</p>
                </Link>
              </div>
            )
          })
        }
      </div>
    )
  }
}