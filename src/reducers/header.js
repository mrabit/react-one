import { TOGGLE_SEARCH, CHANGE_TITLE, LOADING_STATUS } from '../actions/header';

const initState = {
  isOpen: false,
  title: "",
  loading: true
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
    case LOADING_STATUS:
      return Object.assign({}, state, {
        loading: action.loading
      });
    default:
      return state;
  }
}
