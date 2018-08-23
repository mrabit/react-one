import { GET_ONE_INFO } from '../actions/one';


export default (state = { data: {} }, action) => {
  switch (action.type) {
    case GET_ONE_INFO:
      return { data: action.data }
    default:
      return state;
  }
}
