import axios from '../axios';
import { setLoading } from './header';
export const GET_ONE_LIST = "GET_ONE_LIST";
export const CHANGE_CURRENT_PAGE = "CHANGE_CURRENT_PAGE";

export const getOneList = (currentPage = 1) => {
  return dispatch => {
    dispatch(setLoading(true));
    return axios.get(`/api/one/get_list`, {
        params: {
          page: currentPage,
          length: 10
        }
      })
      .then(({ data }) => dispatch({
        type: GET_ONE_LIST,
        data: data.result.aaData,
        totalPage: data.result.totalPage,
        currentPage
      }))
      .then(_ => dispatch(setLoading(false)))
  }
}
