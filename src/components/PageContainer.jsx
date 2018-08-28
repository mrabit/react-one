import { Component } from 'react';
import { withRouter } from "react-router-dom";

class PageContainer extends Component {
  componentDidUpdate(prevProps) {
    console.log(this.props.match);
    if (this.props.location.pathname !== prevProps.location.pathname) {
      window.scrollTo(0, 0);
    }
  }
  render() {
    return this.props.children;
  }
}

export default withRouter(PageContainer)