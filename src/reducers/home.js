import { GET_HOME_INFO } from '../actions/articleList';

export default function(state = {
  data: []
}, action) {
  switch (action.type) {
    case GET_HOME_INFO:
      return { data: action.data };
    default:
      return state;
  }
}
