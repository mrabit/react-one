import axios from 'axios';
import { setLoading } from './header';
export const GET_HOME_INFO = "GET_HOME_INFO";


export const getHomeInfo = (date = "latest") => {
  return dispatch => {
    dispatch(setLoading(true));
    return axios.get('/api/home', {
        params: {
          date
        }
      })
      .then(({ data }) => dispatch({
        type: GET_HOME_INFO,
        data: data.result
      }))
      .then(_ => dispatch(setLoading(false)));
  }
}
