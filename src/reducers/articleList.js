import { GET_ARTICLE_LIST, CHANGE_CURRENT_DATE } from '../actions/articleList';

const initState = {
  data: [],
  currentDate: "0"
}
export default (state = initState, action) => {
  switch (action.type) {
    case GET_ARTICLE_LIST:
      let lists = state.data.slice(0);
      lists.push(...action.data);
      return Object.assign({}, state, {
        data: lists
      });
    case CHANGE_CURRENT_DATE:
      return Object.assign({}, state, {
        currentDate: action.currentDate
      });
    default:
      return state;
  }
}
