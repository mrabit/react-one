import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { changeTitle } from '../actions/header';
import { getOneList } from '../actions/oneList';
import { connect } from 'react-redux';
import dayjs from 'dayjs';
import '../assets/One.css';
import { Link } from 'react-router-dom';
import Loading from '../components/Loading';

class OneList extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    oneList: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
  }
  componentWillMount = _ => {
    const { dispatch, match, oneList } = this.props;
    window.addEventListener('scroll', this.scrollFunc);
    dispatch(changeTitle('一个图文'));
    if (!oneList.length) {
      dispatch(getOneList(0));
    }
  }
  componentWillUnmount = _ => {
    window.removeEventListener('scroll', this.scrollFunc);
  }
  scrollFunc = _ => {
    const { oneList, dispatch, loading, match } = this.props;
    const lastId = (oneList[oneList.length - 1] || {}).hpcontent_id || 0;
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
      dispatch(getOneList(lastId));
    }
  }
  render() {
    return (
      <div className="container no-padder bg">
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
        <Loading loading={this.props.loading} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { oneList, header } = state;
  return {
    oneList: oneList.data,
    loading: header.loading
  }
}

export default connect(mapStateToProps)(OneList);