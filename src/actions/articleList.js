import axios from '../axios';
import { setLoading } from './header';
export const GET_ARTICLE_LIST = "GET_ARTICLE_LIST";



export const getArticleList = (currentPage = 1) => {
  return dispatch => {
    dispatch(setLoading(true));
    return axios.get(`/api/article/get_list`, {
        params: {
          page: currentPage,
          length: 10
        }
      })
      .then(({ data }) => dispatch({
        type: GET_ARTICLE_LIST,
        data: data.result.aaData,
        totalPage: data.result.totalPage,
        currentPage
      }))
      .then(_ => dispatch(setLoading(false)))
  }
}
