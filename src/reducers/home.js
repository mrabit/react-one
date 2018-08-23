import { GET_INFO } from '../actions/home';

export default function(state = {
  data: {
    id: 0,
    content_list: []
  }
}, action) {
  switch (action.type) {
    case GET_INFO:
      return { data: action.data };
    default:
      return state;
  }
}
