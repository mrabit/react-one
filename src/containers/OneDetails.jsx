import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { changeTitle } from '../actions/header';
import { getOneDetails } from '../actions/oneDetails';
import { connect } from 'react-redux';
import '../assets/One.css';
import Loading from '../components/Loading';
import DetailsCom from '../components/OneDetails';

class OneDetails extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    oneInfo: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired,
  }
  componentWillMount = _ => {
    const { dispatch, match } = this.props;
    dispatch(changeTitle('一个图文'));
    dispatch(getOneDetails(match.params.id));
  }
  componentWillReceiveProps = nextProps => {
    const { match: nextMatch } = nextProps;
    const { dispatch, match } = this.props;
    if (nextMatch.params.id !== match.params.id) {
      // dispatch(changeTitle('一个图文'));
      dispatch(getOneDetails(nextMatch.params.id));
    }
  }
  render() {
    let Details = null;
    if (!this.props.loading) {
      Details = <DetailsCom oneInfo={this.props.oneInfo} id={this.props.match.params.id} />;
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
  const { oneDetails, header } = state;
  return {
    oneInfo: oneDetails.data,
    loading: header.loading
  }
}

export default connect(mapStateToProps)(OneDetails);