import { GET_ONE_DETAILS } from '../actions/oneDetails';


export default (state = { data: {} }, action) => {
  switch (action.type) {
    case GET_ONE_DETAILS:
      return Object.assign({}, state, { data: action.data });
    default:
      return state;
  }
}
