import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { combineReducers } from 'redux';
import home from './home';
import menus from './menus';
import header from './header';
import oneDetails from './oneDetails';
import oneList from './oneList';
import articleList from './articleList';
import articleDetails from './articleDetails';

const reducers = combineReducers({
  home,
  menus,
  header,
  oneDetails,
  oneList,
  articleList,
  articleDetails
})

const loggerMiddleware = createLogger()
export default createStore(reducers, applyMiddleware(thunkMiddleware, loggerMiddleware));
