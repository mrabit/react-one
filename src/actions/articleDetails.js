import axios from '../axios';
import { setLoading } from './header';
export const GET_ARTICLE_DETAILS = "GET_ARTICLE_DETAILS";


export const getArticleDetails = (articleId) => {
  return dispatch => {
    dispatch(setLoading(true));
    axios.get(`/api/article/${articleId}`)
      .then(({ data }) => {
        dispatch({
          type: GET_ARTICLE_DETAILS,
          data: data.result
        })
      })
      .then(_ => dispatch(setLoading(false)));
  }
}
