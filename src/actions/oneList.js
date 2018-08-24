import axios from 'axios';
import { setLoading } from './header';
export const GET_ONE_LIST = "GET_ONE_LIST";

export const getOneList = (lastId = 0) => {
  return dispatch => {
    const defaultData = [{ "hpcontent_id": "2178", "hp_title": "VOL.2148", "author_id": "-1", "hp_img_url": "http://image.wufazhuce.com/FmzXd1BqHxapZZz23OX4vicMXj2z", "hp_img_original_url": "http://image.wufazhuce.com/FmzXd1BqHxapZZz23OX4vicMXj2z", "hp_author": "摄影＆桂林大河 作品", "ipad_url": "http://image.wufazhuce.com/FmzXd1BqHxapZZz23OX4vicMXj2z", "hp_content": "“爱”的内容有一大部分是要陪伴你爱的人度过人生的灾难。 by 布莱恩·莫顿", "hp_makettime": "2018-08-24 06:00:00", "last_update_date": "2018-08-22 14:23:38", "web_url": "http://m.wufazhuce.com/one/2178", "wb_img_url": "", "image_authors": "桂林大河", "text_authors": "布莱恩·莫顿", "image_from": "", "text_from": "", "content_bgcolor": "", "template_category": "0", "maketime": "2018-08-24 06:00:00", "share_list": { "wx": { "title": "", "desc": "", "link": "http://m.wufazhuce.com/one/2178?channel=singlemessage", "imgUrl": "", "audio": "" }, "wx_timeline": { "title": "", "desc": "", "link": "http://m.wufazhuce.com/one/2178?channel=timeline", "imgUrl": "", "audio": "" }, "weibo": { "title": "ONE一个 “爱”的内容有一大部分是要陪伴你爱的人度过人生的灾难。 by 布莱恩·莫顿——布莱恩·莫顿 下载ONE一个APP:http://weibo.com/p/100404157874", "desc": "", "link": "http://m.wufazhuce.com/one/2178?channel=weibo", "imgUrl": "", "audio": "" }, "qq": { "title": "", "desc": "", "link": "http://m.wufazhuce.com/one/2178?channel=qq", "imgUrl": "", "audio": "" } }, "praisenum": 2858, "sharenum": 765, "commentnum": 0 }, { "hpcontent_id": "2177", "hp_title": "VOL.2147", "author_id": "-1", "hp_img_url": "http://image.wufazhuce.com/FrwEAgysErierjTJxYNl3h8MAxEX", "hp_img_original_url": "http://image.wufazhuce.com/FrwEAgysErierjTJxYNl3h8MAxEX", "hp_author": "摄影＆Ethan Yang 作品", "ipad_url": "http://image.wufazhuce.com/FrwEAgysErierjTJxYNl3h8MAxEX", "hp_content": "所谓正常，就是习惯成自然的东西。眼下对你们来说，这一切可能显得有些不太正常，但过上一段时间，你们就会习以为常，多见不怪了。 from 《使女的故事》", "hp_makettime": "2018-08-23 06:00:00", "last_update_date": "2018-08-22 14:22:29", "web_url": "http://m.wufazhuce.com/one/2177", "wb_img_url": "", "image_authors": "Ethan Yang", "text_authors": "《使女的故事》", "image_from": "", "text_from": "", "content_bgcolor": "", "template_category": "0", "maketime": "2018-08-23 06:00:00", "share_list": { "wx": { "title": "", "desc": "", "link": "http://m.wufazhuce.com/one/2177?channel=singlemessage", "imgUrl": "", "audio": "" }, "wx_timeline": { "title": "", "desc": "", "link": "http://m.wufazhuce.com/one/2177?channel=timeline", "imgUrl": "", "audio": "" }, "weibo": { "title": "ONE一个 所谓正常，就是习惯成自然的东西。眼下对你们来说，这一切可能显得有些不太正常，但过上一段时间，你们就会习以为常，多见不怪了。 from 《使女的故事》——《使女的故事》 下载ONE一个APP:http://weibo.com/p/100404157874", "desc": "", "link": "http://m.wufazhuce.com/one/2177?channel=weibo", "imgUrl": "", "audio": "" }, "qq": { "title": "", "desc": "", "link": "http://m.wufazhuce.com/one/2177?channel=qq", "imgUrl": "", "audio": "" } }, "praisenum": 5862, "sharenum": 1642, "commentnum": 0 }, { "hpcontent_id": "2176", "hp_title": "VOL.2146", "author_id": "-1", "hp_img_url": "http://image.wufazhuce.com/FqU5jrnmwYWV4uoIzfVbLvLa-D3I", "hp_img_original_url": "http://image.wufazhuce.com/FqU5jrnmwYWV4uoIzfVbLvLa-D3I", "hp_author": "摄影＆Amos Dai 作品", "ipad_url": "http://image.wufazhuce.com/FqU5jrnmwYWV4uoIzfVbLvLa-D3I", "hp_content": "常觉得受到伤害，是因为总期待被善待。 by  傅首尔", "hp_makettime": "2018-08-22 06:00:00", "last_update_date": "2018-08-15 11:14:26", "web_url": "http://m.wufazhuce.com/one/2176", "wb_img_url": "", "image_authors": "Amos Dai", "text_authors": " 傅首尔", "image_from": "", "text_from": "", "content_bgcolor": "", "template_category": "0", "maketime": "2018-08-22 06:00:00", "share_list": { "wx": { "title": "", "desc": "", "link": "http://m.wufazhuce.com/one/2176?channel=singlemessage", "imgUrl": "", "audio": "" }, "wx_timeline": { "title": "", "desc": "", "link": "http://m.wufazhuce.com/one/2176?channel=timeline", "imgUrl": "", "audio": "" }, "weibo": { "title": "ONE一个 常觉得受到伤害，是因为总期待被善待。 by  傅首尔—— 傅首尔 下载ONE一个APP:http://weibo.com/p/100404157874", "desc": "", "link": "http://m.wufazhuce.com/one/2176?channel=weibo", "imgUrl": "", "audio": "" }, "qq": { "title": "", "desc": "", "link": "http://m.wufazhuce.com/one/2176?channel=qq", "imgUrl": "", "audio": "" } }, "praisenum": 13500, "sharenum": 2938, "commentnum": 0 }, { "hpcontent_id": "2175", "hp_title": "VOL.2145", "author_id": "-1", "hp_img_url": "http://image.wufazhuce.com/FlbIss8Bu4t6F-tfFLKoHanhy9SG", "hp_img_original_url": "http://image.wufazhuce.com/FlbIss8Bu4t6F-tfFLKoHanhy9SG", "hp_author": "摄影＆Lionello Delpiccolo 作品", "ipad_url": "http://image.wufazhuce.com/FlbIss8Bu4t6F-tfFLKoHanhy9SG", "hp_content": "生活就是用一种焦虑代替另一种焦虑，用一种欲望代替另一种欲望的过程。 by 阿兰·德波顿", "hp_makettime": "2018-08-21 06:00:00", "last_update_date": "2018-08-15 11:13:39", "web_url": "http://m.wufazhuce.com/one/2175", "wb_img_url": "", "image_authors": "Lionello Delpiccolo", "text_authors": "阿兰·德波顿", "image_from": "", "text_from": "", "content_bgcolor": "", "template_category": "0", "maketime": "2018-08-21 06:00:00", "share_list": { "wx": { "title": "", "desc": "", "link": "http://m.wufazhuce.com/one/2175?channel=singlemessage", "imgUrl": "", "audio": "" }, "wx_timeline": { "title": "", "desc": "", "link": "http://m.wufazhuce.com/one/2175?channel=timeline", "imgUrl": "", "audio": "" }, "weibo": { "title": "ONE一个 生活就是用一种焦虑代替另一种焦虑，用一种欲望代替另一种欲望的过程。 by 阿兰·德波顿——阿兰·德波顿 下载ONE一个APP:http://weibo.com/p/100404157874", "desc": "", "link": "http://m.wufazhuce.com/one/2175?channel=weibo", "imgUrl": "", "audio": "" }, "qq": { "title": "", "desc": "", "link": "http://m.wufazhuce.com/one/2175?channel=qq", "imgUrl": "", "audio": "" } }, "praisenum": 10899, "sharenum": 3828, "commentnum": 0 }, { "hpcontent_id": "2174", "hp_title": "VOL.2144", "author_id": "-1", "hp_img_url": "http://image.wufazhuce.com/Fs9hTob11yU8TdWZ14oy1-cQDcao", "hp_img_original_url": "http://image.wufazhuce.com/Fs9hTob11yU8TdWZ14oy1-cQDcao", "hp_author": "摄影＆王十元 作品", "ipad_url": "http://image.wufazhuce.com/Fs9hTob11yU8TdWZ14oy1-cQDcao", "hp_content": "努力爱一个人，和幸福并无关联，小心啊，爱与不爱之间，离得不是太远。 from 《寂寞的恋人啊》", "hp_makettime": "2018-08-20 06:00:00", "last_update_date": "2018-08-15 11:12:41", "web_url": "http://m.wufazhuce.com/one/2174", "wb_img_url": "", "image_authors": "王十元", "text_authors": "《寂寞的恋人啊》", "image_from": "", "text_from": "", "content_bgcolor": "", "template_category": "0", "maketime": "2018-08-20 06:00:00", "share_list": { "wx": { "title": "", "desc": "", "link": "http://m.wufazhuce.com/one/2174?channel=singlemessage", "imgUrl": "", "audio": "" }, "wx_timeline": { "title": "", "desc": "", "link": "http://m.wufazhuce.com/one/2174?channel=timeline", "imgUrl": "", "audio": "" }, "weibo": { "title": "ONE一个 努力爱一个人，和幸福并无关联，小心啊，爱与不爱之间，离得不是太远。 from 《寂寞的恋人啊》——《寂寞的恋人啊》 下载ONE一个APP:http://weibo.com/p/100404157874", "desc": "", "link": "http://m.wufazhuce.com/one/2174?channel=weibo", "imgUrl": "", "audio": "" }, "qq": { "title": "", "desc": "", "link": "http://m.wufazhuce.com/one/2174?channel=qq", "imgUrl": "", "audio": "" } }, "praisenum": 11385, "sharenum": 2145, "commentnum": 0 }, { "hpcontent_id": "2173", "hp_title": "VOL.2143", "author_id": "-1", "hp_img_url": "http://image.wufazhuce.com/Ftz8siI-ik_M48LCr43SvSIvFbaV", "hp_img_original_url": "http://image.wufazhuce.com/Ftz8siI-ik_M48LCr43SvSIvFbaV", "hp_author": "摄影＆Lucas Favre 作品", "ipad_url": "http://image.wufazhuce.com/Ftz8siI-ik_M48LCr43SvSIvFbaV", "hp_content": " “正常”其实是主观的，没有什么标准答案，这个地球上有70亿人，就有70亿种正常。 from 《活下去的理由》", "hp_makettime": "2018-08-19 06:00:00", "last_update_date": "2018-08-15 11:11:48", "web_url": "http://m.wufazhuce.com/one/2173", "wb_img_url": "", "image_authors": "Lucas Favre", "text_authors": "《活下去的理由》", "image_from": "", "text_from": "", "content_bgcolor": "", "template_category": "0", "maketime": "2018-08-19 06:00:00", "share_list": { "wx": { "title": "", "desc": "", "link": "http://m.wufazhuce.com/one/2173?channel=singlemessage", "imgUrl": "", "audio": "" }, "wx_timeline": { "title": "", "desc": "", "link": "http://m.wufazhuce.com/one/2173?channel=timeline", "imgUrl": "", "audio": "" }, "weibo": { "title": "ONE一个  “正常”其实是主观的，没有什么标准答案，这个地球上有70亿人，就有70亿种正常。 from 《活下去的理由》——《活下去的理由》 下载ONE一个APP:http://weibo.com/p/100404157874", "desc": "", "link": "http://m.wufazhuce.com/one/2173?channel=weibo", "imgUrl": "", "audio": "" }, "qq": { "title": "", "desc": "", "link": "http://m.wufazhuce.com/one/2173?channel=qq", "imgUrl": "", "audio": "" } }, "praisenum": 10036, "sharenum": 2477, "commentnum": 0 }, { "hpcontent_id": "2172", "hp_title": "VOL.2142", "author_id": "-1", "hp_img_url": "http://image.wufazhuce.com/FkqahRqAsrolp-tSrLP5oYsqGQxO", "hp_img_original_url": "http://image.wufazhuce.com/FkqahRqAsrolp-tSrLP5oYsqGQxO", "hp_author": "摄影＆blackstation王悟空 作品", "ipad_url": "http://image.wufazhuce.com/FkqahRqAsrolp-tSrLP5oYsqGQxO", "hp_content": " 爱情来了也不好去了也不好，不来不去也不好，爱情是麻烦的。 from 《琼美卡随想录》", "hp_makettime": "2018-08-18 06:00:00", "last_update_date": "2018-08-15 11:10:57", "web_url": "http://m.wufazhuce.com/one/2172", "wb_img_url": "", "image_authors": "blackstation王悟空", "text_authors": "《琼美卡随想录》", "image_from": "", "text_from": "", "content_bgcolor": "", "template_category": "0", "maketime": "2018-08-18 06:00:00", "share_list": { "wx": { "title": "", "desc": "", "link": "http://m.wufazhuce.com/one/2172?channel=singlemessage", "imgUrl": "", "audio": "" }, "wx_timeline": { "title": "", "desc": "", "link": "http://m.wufazhuce.com/one/2172?channel=timeline", "imgUrl": "", "audio": "" }, "weibo": { "title": "ONE一个  爱情来了也不好去了也不好，不来不去也不好，爱情是麻烦的。 from 《琼美卡随想录》——《琼美卡随想录》 下载ONE一个APP:http://weibo.com/p/100404157874", "desc": "", "link": "http://m.wufazhuce.com/one/2172?channel=weibo", "imgUrl": "", "audio": "" }, "qq": { "title": "", "desc": "", "link": "http://m.wufazhuce.com/one/2172?channel=qq", "imgUrl": "", "audio": "" } }, "praisenum": 13649, "sharenum": 2362, "commentnum": 0 }, { "hpcontent_id": "2171", "hp_title": "VOL.2141", "author_id": "-1", "hp_img_url": "http://image.wufazhuce.com/Fg44nWDszn64emc2NaK-Nv0_dBFq", "hp_img_original_url": "http://image.wufazhuce.com/Fg44nWDszn64emc2NaK-Nv0_dBFq", "hp_author": "插画＆武芃 作品", "ipad_url": "http://image.wufazhuce.com/Fg44nWDszn64emc2NaK-Nv0_dBFq", "hp_content": "性格缺点能改正固然很好，但改正真的很难，我是做不到的。而掩藏到看不出瑕疵，其实只会让自己变得更加扁平苍白。与其一心想掩盖这些缺陷，不如努力让自己的缺点变得可爱，这是最佳。如果做不到，就找一群能够接受并认同自己缺点的人，这是次佳。勉强自己去改，不得不做出两面人格，是最差的选择了。 ​​ by 姬霄", "hp_makettime": "2018-08-17 06:00:00", "last_update_date": "2018-08-15 11:10:10", "web_url": "http://m.wufazhuce.com/one/2171", "wb_img_url": "", "image_authors": "武芃", "text_authors": "姬霄", "image_from": "", "text_from": "", "content_bgcolor": "", "template_category": "0", "maketime": "2018-08-17 06:00:00", "share_list": { "wx": { "title": "", "desc": "", "link": "http://m.wufazhuce.com/one/2171?channel=singlemessage", "imgUrl": "", "audio": "" }, "wx_timeline": { "title": "", "desc": "", "link": "http://m.wufazhuce.com/one/2171?channel=timeline", "imgUrl": "", "audio": "" }, "weibo": { "title": "ONE一个 性格缺点能改正固然很好，但改正真的很难，我是做不到的。而掩藏到看不出瑕疵，其实只会让自己变得更加扁平苍白。与其一心想掩盖这些缺陷，不如努力让自己的缺点变得可爱，这是最佳。如果做不到，就找一群能够…——姬霄 下载ONE一个APP:http://weibo.com/p/100404157874", "desc": "", "link": "http://m.wufazhuce.com/one/2171?channel=weibo", "imgUrl": "", "audio": "" }, "qq": { "title": "", "desc": "", "link": "http://m.wufazhuce.com/one/2171?channel=qq", "imgUrl": "", "audio": "" } }, "praisenum": 12811, "sharenum": 3353, "commentnum": 0 }, { "hpcontent_id": "2170", "hp_title": "VOL.2140", "author_id": "-1", "hp_img_url": "http://image.wufazhuce.com/FgHp6Zsv04OgXXMEIXGCh1rkf3xj", "hp_img_original_url": "http://image.wufazhuce.com/FgHp6Zsv04OgXXMEIXGCh1rkf3xj", "hp_author": "摄影＆Coconutbird 作品", "ipad_url": "http://image.wufazhuce.com/FgHp6Zsv04OgXXMEIXGCh1rkf3xj", "hp_content": "我理解你小心翼翼地远离人群，只是因为你曾厚待过他们，他们却辜负了你。 by 朱肖影", "hp_makettime": "2018-08-16 06:00:00", "last_update_date": "2018-08-15 14:49:34", "web_url": "http://m.wufazhuce.com/one/2170", "wb_img_url": "", "image_authors": "Coconutbird", "text_authors": "朱肖影", "image_from": "", "text_from": "", "content_bgcolor": "", "template_category": "0", "maketime": "2018-08-16 06:00:00", "share_list": { "wx": { "title": "", "desc": "", "link": "http://m.wufazhuce.com/one/2170?channel=singlemessage", "imgUrl": "", "audio": "" }, "wx_timeline": { "title": "", "desc": "", "link": "http://m.wufazhuce.com/one/2170?channel=timeline", "imgUrl": "", "audio": "" }, "weibo": { "title": "ONE一个 我理解你小心翼翼地远离人群，只是因为你曾厚待过他们，他们却辜负了你。 by 朱肖影——朱肖影 下载ONE一个APP:http://weibo.com/p/100404157874", "desc": "", "link": "http://m.wufazhuce.com/one/2170?channel=weibo", "imgUrl": "", "audio": "" }, "qq": { "title": "", "desc": "", "link": "http://m.wufazhuce.com/one/2170?channel=qq", "imgUrl": "", "audio": "" } }, "praisenum": 22188, "sharenum": 4372, "commentnum": 0 }, { "hpcontent_id": "2169", "hp_title": "VOL.2139", "author_id": "-1", "hp_img_url": "http://image.wufazhuce.com/FhhYAe88vaXZjUO9Kaltjj1l9I1N", "hp_img_original_url": "http://image.wufazhuce.com/FhhYAe88vaXZjUO9Kaltjj1l9I1N", "hp_author": "摄影＆Kevin Gent 作品", "ipad_url": "http://image.wufazhuce.com/FhhYAe88vaXZjUO9Kaltjj1l9I1N", "hp_content": "我们总爱笑话小时候的自己，笑我是一个努力学好的坏丫头，而他是一个努力学坏的好小子。多年之后，这些角色会颠倒，然后再颠倒，直到我们开始接受自己的双重性，我们就这样接纳了大相径庭的信条，接纳了自身的光明与阴暗。 from 《只是孩子》", "hp_makettime": "2018-08-15 06:00:00", "last_update_date": "2018-08-09 15:32:31", "web_url": "http://m.wufazhuce.com/one/2169", "wb_img_url": "", "image_authors": "Kevin Gent", "text_authors": "《只是孩子》", "image_from": "", "text_from": "", "content_bgcolor": "", "template_category": "0", "maketime": "2018-08-15 06:00:00", "share_list": { "wx": { "title": "", "desc": "", "link": "http://m.wufazhuce.com/one/2169?channel=singlemessage", "imgUrl": "", "audio": "" }, "wx_timeline": { "title": "", "desc": "", "link": "http://m.wufazhuce.com/one/2169?channel=timeline", "imgUrl": "", "audio": "" }, "weibo": { "title": "ONE一个 我们总爱笑话小时候的自己，笑我是一个努力学好的坏丫头，而他是一个努力学坏的好小子。多年之后，这些角色会颠倒，然后再颠倒，直到我们开始接受自己的双重性，我们就这样接纳了大相径庭的信条，接纳…——《只是孩子》 下载ONE一个APP:http://weibo.com/p/100404157874", "desc": "", "link": "http://m.wufazhuce.com/one/2169?channel=weibo", "imgUrl": "", "audio": "" }, "qq": { "title": "", "desc": "", "link": "http://m.wufazhuce.com/one/2169?channel=qq", "imgUrl": "", "audio": "" } }, "praisenum": 9468, "sharenum": 2251, "commentnum": 0 }];
    dispatch(setLoading(false))
    return dispatch({
      type: GET_ONE_LIST,
      data: defaultData
    })
    dispatch(setLoading(true));
    getDataList(lastId)
      .then(data => {
        const list = [];
        data.reduce((prev, next) => {
            return prev.then(_ => axios.get(`/api/hp/detail/${next}`)
              .then(d => list.push(d.data.data)));
          }, Promise.resolve())
          .then(_ => dispatch({
            type: GET_ONE_LIST,
            data: list
          }))
          .then(_ => dispatch(setLoading(false)));
      })
  }
}

const getDataList = (lastId = 0) => axios.get(`/api/hp/idlist/${lastId}`)
  .then(d => d.data.data)
