import { GET_ARTICLE_LIST } from '../actions/articleList';

const initState = {
  data: [],
  totalPage: 0,
  currentPage: 1
}
export default (state = initState, action) => {
  switch (action.type) {
    case GET_ARTICLE_LIST:
      let lists = state.data.slice(0);
      lists.push(...action.data);
      return Object.assign({}, state, {
        data: lists,
        currentPage: action.currentPage,
        totalPage: action.totalPage
      });
    default:
      return state;
  }
}
