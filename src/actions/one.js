import axios from 'axios';
export const GET_ONE_INFO = "GET_ONE_INFO";

export const getOneInfo = id => {
  return dispatch => {
    axios.get(`/api/hp/feeds/${id}/成都市`, {
        params: {
          platform: 'ios',
          uuid: 'ffffffff-9DD0-4BC6-9952-89B823AEB72D',
          version: 'v4.5.6'
        }
      })
      .then(d => {
        dispatch({
          type: GET_ONE_INFO,
          data: d.data.data
        })
      })
  }
}
