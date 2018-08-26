import { GET_ARTICLE_DETAILS } from '../actions/articleDetails';


export default (state = { data: {} }, action) => {
  switch (action.type) {
    case GET_ARTICLE_DETAILS:
      return { data: action.data };
    default:
      return state;
  }
}
