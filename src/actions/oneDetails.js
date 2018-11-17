import axios from '../axios';
import { setLoading } from './header';
export const GET_ONE_DETAILS = "GET_ONE_DETAILS";

export const getOneDetails = id => {
  return dispatch => {
    dispatch(setLoading(true));
    axios.get(`/api/one/${id}`)
      .then(({ data }) => dispatch({
        type: GET_ONE_DETAILS,
        data: data.result
      }))
      .then(_ => dispatch(setLoading(false)))
  }
}
