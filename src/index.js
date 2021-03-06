import React from 'react';
import ReactDOM from 'react-dom';
import Root from './containers/Root'
import { Provider } from 'react-redux';
import store from './reducers';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={store}>
    <Root />
  </Provider>, document.getElementById('root'));
registerServiceWorker();
