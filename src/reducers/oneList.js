import { GET_ONE_LIST } from '../actions/oneList';


export default (state = { data: [] }, action) => {
  switch (action.type) {
    case GET_ONE_LIST:
      let lists = state.data.slice(0);
      lists.push(...action.data);
      return Object.assign({}, state, {
        data: lists
      })
    default:
      return state;
  }
}
