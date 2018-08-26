import axios from 'axios';
import { setLoading } from './header';
export const GET_ONE_DETAILS = "GET_ONE_DETAILS";

export const getOneDetails = id => {
  return dispatch => {
    const defaultData = {
      "id": "16029",
      "category": "0",
      "display_category": 6,
      "item_id": "2172",
      "title": "摄影",
      "forward": " 爱情来了也不好去了也不好，不来不去也不好，爱情是麻烦的。",
      "img_url": "http://image.wufazhuce.com/FkqahRqAsrolp-tSrLP5oYsqGQxO",
      "like_count": 13635,
      "post_date": "2018-08-18 06:00:00",
      "last_update_date": "2018-08-15 11:10:57",
      "author": {},
      "video_url": "",
      "audio_url": "",
      "audio_platform": 2,
      "start_video": "",
      "has_reading": 0,
      "volume": "VOL.2142",
      "pic_info": "blackstation王悟空",
      "words_info": "《琼美卡随想录》",
      "subtitle": "",
      "number": 0,
      "serial_id": 0,
      "serial_list": [],
      "movie_story_id": 0,
      "ad_id": 0,
      "ad_type": 0,
      "ad_pvurl": "",
      "ad_linkurl": "",
      "ad_makettime": "",
      "ad_closetime": "",
      "ad_share_cnt": "",
      "ad_pvurl_vendor": "",
      "content_id": "2172",
      "content_type": "0",
      "content_bgcolor": "",
      "share_url": "http://m.wufazhuce.com/one/2172",
      "share_info": {
        "url": "http://m.wufazhuce.com/one/2172",
        "image": "http://image.wufazhuce.com/FkqahRqAsrolp-tSrLP5oYsqGQxO",
        "title": "VOL.2142",
        "content": " 爱情来了也不好去了也不好，不来不去也不好，爱情是麻烦的。"
      },
      "share_list": {
        "wx": {
          "title": "",
          "desc": "",
          "link": "http://m.wufazhuce.com/one/2172?channel=singlemessage",
          "imgUrl": "",
          "audio": ""
        },
        "wx_timeline": {
          "title": "",
          "desc": "",
          "link": "http://m.wufazhuce.com/one/2172?channel=timeline",
          "imgUrl": "",
          "audio": ""
        },
        "weibo": {
          "title": "ONE一个  爱情来了也不好去了也不好，不来不去也不好，爱情是麻烦的。——《琼美卡随想录》 下载ONE一个APP:http://weibo.com/p/100404157874",
          "desc": "",
          "link": "http://m.wufazhuce.com/one/2172?channel=weibo",
          "imgUrl": "",
          "audio": ""
        },
        "qq": {
          "title": "",
          "desc": "",
          "link": "http://m.wufazhuce.com/one/2172?channel=qq",
          "imgUrl": "",
          "audio": ""
        }
      },
      "tag_list": [],
      "orientation": "0",
      "weather": {
        "city_name": "成都",
        "date": "2018-08-18",
        "temperature": "32",
        "humidity": "51%",
        "climate": "晴",
        "wind_direction": "2级",
        "hurricane": "东南风",
        "icons": {
          "day": "weather_icon_clear",
          "night": "weather_icon_clear_night"
        }
      }
    }
    // dispatch(setLoading(false))
    // return dispatch({
    //   type: GET_ONE_DETAILS,
    //   data: defaultData
    // })
    dispatch(setLoading(true));
    axios.get(`/api/hp/feeds/${id}/成都市`, {
        params: {
          platform: 'ios',
          uuid: 'ffffffff-9DD0-4BC6-9952-89B823AEB72D',
          version: 'v4.5.6'
        }
      })
      .then(d => dispatch({
        type: GET_ONE_DETAILS,
        data: d.data.data
      }))
      .then(_ => dispatch(setLoading(false)))
  }
}
