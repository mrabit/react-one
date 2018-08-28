import { GET_ONE_LIST } from '../actions/oneList';


export default (state = { data: [], totalPage: 0, currentPage: 1 }, action) => {
  switch (action.type) {
    case GET_ONE_LIST:
      let lists = state.data.slice(0);
      lists.push(...action.data);
      return Object.assign({}, state, {
        data: lists,
        totalPage: action.totalPage,
        currentPage: action.currentPage
      });
    default:
      return state;
  }
}
