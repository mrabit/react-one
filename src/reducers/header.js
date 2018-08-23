import { TOGGLE_SEARCH, CHANGE_TITLE } from '../actions/header';

const initState = {
  isOpen: false,
  title: ""
}
export default (state = initState, action) => {
  switch (action.type) {
    case TOGGLE_SEARCH:
      return Object.assign({}, state, {
        isOpen: !state.isOpen
      });
    case CHANGE_TITLE:
      return Object.assign({}, state, {
        title: action.title
      });
    default:
      return state;
  }
}
