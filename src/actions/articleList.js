import axios from 'axios';
import { setLoading } from './header';
export const GET_HOME_INFO = "GET_HOME_INFO";
export const GET_ARTICLE_LIST = "GET_ARTICLE_LIST";
export const CHANGE_CURRENT_DATE = "CHANGE_CURRENT_DATE";



export const getArticleList = (date = ['0'], type = "GET_ARTICLE_LIST") => {
  return dispatch => {
    const defaultData = [{
        "id": "16080",
        "category": "0",
        "display_category": 6,
        "item_id": "2177",
        "title": "摄影",
        "forward": "所谓正常，就是习惯成自然的东西。眼下对你们来说，这一切可能显得有些不太正常，但过上一段时间，你们就会习以为常，多见不怪了。",
        "img_url": "http://image.wufazhuce.com/FrwEAgysErierjTJxYNl3h8MAxEX",
        "like_count": 1925,
        "post_date": "2018-08-23 06:00:00",
        "last_update_date": "2018-08-22 14:22:29",
        "author": {},
        "video_url": "",
        "audio_url": "",
        "audio_platform": 2,
        "start_video": "",
        "has_reading": 0,
        "volume": "VOL.2147",
        "pic_info": "Ethan Yang",
        "words_info": "《使女的故事》",
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
        "content_id": "2177",
        "content_type": "0",
        "content_bgcolor": "",
        "share_url": "http://m.wufazhuce.com/one/2177",
        "share_info": {
          "url": "http://m.wufazhuce.com/one/2177",
          "image": "http://image.wufazhuce.com/FrwEAgysErierjTJxYNl3h8MAxEX",
          "title": "VOL.2147",
          "content": "所谓正常，就是习惯成自然的东西。眼下对你们来说，这一切可能显得有些不太正常，但过上一段时间，你们就会习以为常，多见不怪了。"
        },
        "share_list": {
          "wx": {
            "title": "",
            "desc": "",
            "link": "http://m.wufazhuce.com/one/2177?channel=singlemessage",
            "imgUrl": "",
            "audio": ""
          },
          "wx_timeline": {
            "title": "",
            "desc": "",
            "link": "http://m.wufazhuce.com/one/2177?channel=timeline",
            "imgUrl": "",
            "audio": ""
          },
          "weibo": {
            "title": "ONE一个 所谓正常，就是习惯成自然的东西。眼下对你们来说，这一切可能显得有些不太正常，但过上一段时间，你们就会习以为常，多见不怪了。——《使女的故事》 下载ONE一个APP:http://weibo.com/p/100404157874",
            "desc": "",
            "link": "http://m.wufazhuce.com/one/2177?channel=weibo",
            "imgUrl": "",
            "audio": ""
          },
          "qq": {
            "title": "",
            "desc": "",
            "link": "http://m.wufazhuce.com/one/2177?channel=qq",
            "imgUrl": "",
            "audio": ""
          }
        },
        "tag_list": [],
        "orientation": "0"
      },
      {
        "id": "16059",
        "category": "1",
        "display_category": 6,
        "item_id": "3427",
        "title": "每个人都有老家的兄弟，我的兄弟叫海峰",
        "forward": "一个人能重新开始，不可能有其他的原因，一定是因为他拥有真正的勇气。",
        "img_url": "http://image.wufazhuce.com/Fleegz2YZLIrxhCS3DPfDz31r4p_",
        "like_count": 470,
        "post_date": "2018-08-23 06:00:00",
        "last_update_date": "2018-08-22 16:09:53",
        "author": {
          "user_id": "4814744",
          "user_name": "张向东",
          "desc": "作家，创业者，骑行者",
          "wb_name": "@张向东",
          "is_settled": "0",
          "settled_type": "0",
          "summary": "作家，创业者，骑行者",
          "fans_total": "51",
          "web_url": "http://image.wufazhuce.com/FgetJqVq_f86tpm5yGeS7bkWAvCF"
        },
        "video_url": "",
        "audio_url": "",
        "audio_platform": 2,
        "start_video": "",
        "has_reading": 0,
        "volume": 0,
        "pic_info": "",
        "words_info": "",
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
        "content_id": "3427",
        "content_type": "1",
        "content_bgcolor": "#FFFFFF",
        "share_url": "http://m.wufazhuce.com/article/3427",
        "share_info": {
          "url": "http://m.wufazhuce.com/article/3427",
          "image": "http://image.wufazhuce.com/Fleegz2YZLIrxhCS3DPfDz31r4p_",
          "title": "每个人都有老家的兄弟，我的兄弟叫海峰 作者/张向东",
          "content": "一个人能重新开始，不可能有其他的原因，一定是因为他拥有真正的勇气。"
        },
        "share_list": {
          "wx": {
            "title": "ONE STORY | 每个人都有老家的兄弟，我的兄弟叫海峰",
            "desc": "文/张向东 一个人能重新开始，不可能有其他的原因，一定是因为他拥有真正的勇气。",
            "link": "http://m.wufazhuce.com/article/3427?channel=singlemessage",
            "imgUrl": "http://image.wufazhuce.com/ONE_logo_120_square.png",
            "audio": ""
          },
          "wx_timeline": {
            "title": "ONE STORY | 每个人都有老家的兄弟，我的兄弟叫海峰",
            "desc": "文/张向东 一个人能重新开始，不可能有其他的原因，一定是因为他拥有真正的勇气。",
            "link": "http://m.wufazhuce.com/article/3427?channel=timeline",
            "imgUrl": "http://image.wufazhuce.com/ONE_logo_120_square.png",
            "audio": ""
          },
          "weibo": {
            "title": "ONE一个《ONE STORY | 每个人都有老家的兄弟，我的兄弟叫海峰》 文/张向东： 一个人能重新开始，不可能有其他的原因，一定是因为他拥有真正的勇气。 阅读全文：http://m.wufazhuce.com/article/3427?channel=weibo 下载ONE一个APP:http://weibo.com/p/100404157874",
            "desc": "",
            "link": "http://m.wufazhuce.com/article/3427?channel=weibo",
            "imgUrl": "",
            "audio": ""
          },
          "qq": {
            "title": "每个人都有老家的兄弟，我的兄弟叫海峰",
            "desc": "一个人能重新开始，不可能有其他的原因，一定是因为他拥有真正的勇气。",
            "link": "http://m.wufazhuce.com/article/3427?channel=qq",
            "imgUrl": "http://image.wufazhuce.com/ONE_logo_120_square.png",
            "audio": ""
          }
        },
        "tag_list": [{
          "id": "7",
          "title": "ONE STORY"
        }]
      },
      {
        "id": "16099",
        "category": "2",
        "display_category": 6,
        "item_id": "710",
        "title": "风从海上来21",
        "forward": "她当然知道自己病了，可却没有打算把自己治好。",
        "img_url": "http://image.wufazhuce.com/FlZbcWnLvCbh4QDQ_ztdVflLb68f",
        "like_count": 145,
        "post_date": "2018-08-23 06:00:00",
        "last_update_date": "2018-08-23 00:34:36",
        "author": {
          "user_id": "4814711",
          "user_name": "姚瑶",
          "desc": "作家，翻译，独立摄影师。",
          "wb_name": "@姚瑶vagrancy",
          "is_settled": "0",
          "settled_type": "0",
          "summary": "作家，翻译，独立摄影师。",
          "fans_total": "11652",
          "web_url": "http://image.wufazhuce.com/FlKZMg2_6FZPZC6VfIyejb7lHnLl"
        },
        "video_url": "",
        "audio_url": "",
        "audio_platform": 2,
        "start_video": "",
        "has_reading": 0,
        "volume": 0,
        "pic_info": "",
        "words_info": "",
        "subtitle": "连载：第20章",
        "number": "20",
        "serial_id": "61",
        "serial_list": [
          "672",
          "673",
          "676",
          "678",
          "680",
          "681",
          "685",
          "690",
          "691",
          "692",
          "693",
          "695",
          "696",
          "701",
          "702",
          "703",
          "704",
          "706",
          "708",
          "710"
        ],
        "movie_story_id": 0,
        "ad_id": 0,
        "ad_type": 0,
        "ad_pvurl": "",
        "ad_linkurl": "",
        "ad_makettime": "",
        "ad_closetime": "",
        "ad_share_cnt": "",
        "ad_pvurl_vendor": "",
        "content_id": "710",
        "content_type": "2",
        "content_bgcolor": "#FFFFFF",
        "share_url": "http://m.wufazhuce.com/serial/710",
        "share_info": {
          "url": "http://m.wufazhuce.com/serial/710",
          "image": "http://image.wufazhuce.com/FlZbcWnLvCbh4QDQ_ztdVflLb68f",
          "title": "风从海上来 · 第二十一章 · 原地等待 作者/姚瑶",
          "content": "她当然知道自己病了，可却没有打算把自己治好。"
        },
        "share_list": {
          "wx": {
            "title": "连载 | 风从海上来 · 第二十一章 · 原地等待",
            "desc": "文/姚瑶 她当然知道自己病了，可却没有打算把自己治好。",
            "link": "http://m.wufazhuce.com/serial/710?channel=singlemessage",
            "imgUrl": "http://image.wufazhuce.com/ONE_logo_120_square.png",
            "audio": ""
          },
          "wx_timeline": {
            "title": "连载 | 风从海上来 · 第二十一章 · 原地等待",
            "desc": "文/姚瑶 她当然知道自己病了，可却没有打算把自己治好。",
            "link": "http://m.wufazhuce.com/serial/710?channel=timeline",
            "imgUrl": "http://image.wufazhuce.com/ONE_logo_120_square.png",
            "audio": ""
          },
          "weibo": {
            "title": "ONE一个《连载 | 风从海上来 · 第二十一章 · 原地等待》 文/姚瑶： 她当然知道自己病了，可却没有打算把自己治好。 阅读全文：http://m.wufazhuce.com/serial/710?channel=weibo 下载ONE一个APP:http://weibo.com/p/100404157874",
            "desc": "",
            "link": "http://m.wufazhuce.com/serial/710?channel=weibo",
            "imgUrl": "",
            "audio": ""
          },
          "qq": {
            "title": "风从海上来 · 第二十一章 · 原地等待",
            "desc": "她当然知道自己病了，可却没有打算把自己治好。",
            "link": "http://m.wufazhuce.com/serial/710?channel=qq",
            "imgUrl": "http://image.wufazhuce.com/ONE_logo_120_square.png",
            "audio": ""
          }
        },
        "tag_list": []
      },
      {
        "id": "16097",
        "category": "3",
        "display_category": 6,
        "item_id": "2199",
        "title": "你有哪些厌倦社交的时刻？",
        "forward": "希望身边有个半径1米的透明结界，人群永远无法靠近。",
        "img_url": "http://image.wufazhuce.com/Fvi2Zc4iR1pI7ic1wx6mqHhlHmHo",
        "like_count": 403,
        "post_date": "2018-08-23 06:00:00",
        "last_update_date": "2018-08-22 21:19:12",
        "author": {
          "user_id": "0",
          "user_name": "一个App工作室",
          "web_url": "http://image.wufazhuce.com/placeholder-author-avatar.png",
          "summary": "",
          "desc": "",
          "is_settled": "",
          "settled_type": "",
          "fans_total": "",
          "wb_name": ""
        },
        "video_url": "",
        "audio_url": "",
        "audio_platform": 2,
        "start_video": "",
        "has_reading": 0,
        "volume": 0,
        "pic_info": "",
        "words_info": "",
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
        "content_id": "2199",
        "content_type": "3",
        "content_bgcolor": "#FFFFFF",
        "share_url": "http://m.wufazhuce.com/question/2199",
        "share_info": {
          "url": "http://m.wufazhuce.com/question/2199",
          "image": "http://image.wufazhuce.com/Fvi2Zc4iR1pI7ic1wx6mqHhlHmHo",
          "title": "你有哪些厌倦社交的时刻？",
          "content": "大多数人都算不上社恐，只能算是社厌。每个人都多多少少会有自己的社厌时刻，你有吗？"
        },
        "share_list": {
          "wx": {
            "title": "问答 | 你有哪些厌倦社交的时刻？",
            "desc": "文/网友 希望身边有个半径1米的透明结界，人群永远无法靠近。",
            "link": "http://m.wufazhuce.com/question/2199?channel=singlemessage",
            "imgUrl": "http://image.wufazhuce.com/ONE_logo_120_square.png",
            "audio": ""
          },
          "wx_timeline": {
            "title": "问答 | 你有哪些厌倦社交的时刻？",
            "desc": "文/网友 希望身边有个半径1米的透明结界，人群永远无法靠近。",
            "link": "http://m.wufazhuce.com/question/2199?channel=timeline",
            "imgUrl": "http://image.wufazhuce.com/ONE_logo_120_square.png",
            "audio": ""
          },
          "weibo": {
            "title": "ONE一个《问答 | 你有哪些厌倦社交的时刻？》 文/网友： 希望身边有个半径1米的透明结界，人群永远无法靠近。 阅读全文：http://m.wufazhuce.com/question/2199?channel=weibo 下载ONE一个APP:http://weibo.com/p/100404157874",
            "desc": "",
            "link": "http://m.wufazhuce.com/question/2199?channel=weibo",
            "imgUrl": "",
            "audio": ""
          },
          "qq": {
            "title": "你有哪些厌倦社交的时刻？",
            "desc": "希望身边有个半径1米的透明结界，人群永远无法靠近。",
            "link": "http://m.wufazhuce.com/question/2199?channel=qq",
            "imgUrl": "http://image.wufazhuce.com/ONE_logo_120_square.png",
            "audio": ""
          }
        },
        "tag_list": [],
        "answerer": {
          "user_id": "0",
          "user_name": "网友",
          "web_url": "http://image.wufazhuce.com/placeholder-author-avatar.png",
          "summary": "",
          "desc": "",
          "is_settled": "",
          "settled_type": "",
          "fans_total": "",
          "wb_name": ""
        }
      },
      {
        "id": "16095",
        "category": "4",
        "display_category": 6,
        "item_id": "2746",
        "title": "真爱太难得了，所以快乐已经好不容易",
        "forward": "这个世界上，打发无聊时光的事情有很多，谈恋爱却是最令人振奋的一件事。",
        "img_url": "http://image.wufazhuce.com/Fk-nr4aRHJIm8d-2DOlXOQkE5v2e",
        "like_count": 343,
        "post_date": "2018-08-23 06:00:00",
        "last_update_date": "2018-08-23 01:06:58",
        "author": {
          "user_id": "7606937",
          "user_name": "Regor_",
          "desc": "自由撰稿人，祸国文青，爱养狗，一事无成心事多。微博：@Regor_",
          "wb_name": "",
          "is_settled": "0",
          "settled_type": "0",
          "summary": "自由撰稿人",
          "fans_total": "1172",
          "web_url": "http://image.wufazhuce.com/FpayqH8DafqjjZQhvufNRzQXLdXt"
        },
        "video_url": "",
        "audio_url": "http://music.wufazhuce.com/lm4PJ6BytaOTDq3FK-NGXq0B3BHn",
        "audio_platform": "4",
        "start_video": "",
        "has_reading": 0,
        "volume": 0,
        "pic_info": "",
        "words_info": "",
        "subtitle": "Love Addict",
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
        "content_id": "2746",
        "content_type": "4",
        "content_bgcolor": "#FFFFFF",
        "share_url": "http://m.wufazhuce.com/music/2746",
        "share_info": {
          "url": "http://m.wufazhuce.com/music/2746",
          "image": "http://image.wufazhuce.com/Fk-nr4aRHJIm8d-2DOlXOQkE5v2e",
          "title": "「一个」音乐: Regor_ Love Addict",
          "content": "\n  \n    \n    \n    \n    var ONEGLOBAL = {cache: \"placeholder-one-cache-flag\", staturl:\"http://analytical.wufazhuce.com:81/\", fullwebview: false} \n  \n  \n  丁立秋是第5个失败品。他说我虚荣无耻、品格低下，是一般具有基本道德的人所不能接受的存在。我用吸管吸着豆奶，一言不发。他突然站起来，指着我的鼻子骂了最后一句：&ldquo;瞎了眼才看上你！&rdquo;为了虚张声势特意抬高了嗓子。伸手扯起放在桌沿的黑色手包，走出火锅店时的矫态，娘炮得有点搞笑。我看见他愤怒的神情下，双唇微微发抖。目光在暖色吊灯下飘忽来去，像夜里逃窜的老鼠，窸窸窣窣，害怕又具有某种自我麻痹式的胜利感。四宫格里沸腾的红汤里还有丁立秋扔下去的鸭肠，我赶紧拿着漏勺和筷子掏起来。晚了，已经老得跟橡皮筋似的，嚼起来还有点发酸。邻桌一对男女偷偷摸摸地瞥了我几眼，猜测一个负心的女人独自涮火锅的心情，然后尽情地腹诽。其实我跟丁立秋本毫无干系，只是他一直认为我们一定会结婚。他只是二姑妈的邻居王大奶奶的外甥，一个爱抖腿的外科医生。我不爱丁立秋，连喜欢都不想给他，特别是在这一顿火锅之后。结账时服务员跟我说他在走出饭店时，拿走了一包玉溪香烟，记我账上。老妈的电话火速般拨了进来，我说晚上好呀，太后娘娘。也许是我吊儿郎当的死样子在这个节骨眼上火上浇油了，老妈劈头盖脸地骂了十分钟不带喘口气的，并将我从幼儿园大班开始的种种劣迹逐一捅出来鞭尸。我还是那句话，亲是您让我相的，搞得大家都不开心了倒是让我一个人背锅合适嘛？猎德大桥我去给您试试桥下水多深不？日常威胁对付我妈还是挺管用的，尽管后来我还真的去了猎德大桥。这座横跨珠江的大桥，北往繁华闹市，南接朴实城郊。变幻色彩的广州塔在带着薄雾水气的夜晚显得特别妩媚，像穿着束身鲜艳长裙的细腰少妇。游船经过小蛮腰，缓缓经过桥底，各艘船船身上挂着行行色色的广告牌，写着XX银行、XX保险。富人的欲望沟壑难填，变着花样哄大家入瓮。繁华的从来都是城市，不是人心。我的双肘撑在桥上的金属栏杆，耳边呼呼而过的江风。这时手机响了，七喜丸子又在软件上给我发了消息。就在昨天，我挽着七喜丸子的手从剧院走出来时，撞见了丁立秋的同事。于是丁立秋狗急跳墙般地打电话过来质问我，并约了今晚在火锅店与我摊牌。其实我并不懂摊的是哪门子牌，我又不是他女友，只是奉父母之命吃过几次饭罢了。本着与人为善，凡事给个机会的原则，而结局通常是一杯劣质奶茶越喝越反胃。七喜丸子就不同了，我喜欢他，就凭他能让我开心。七喜丸子是善解风情的男人，而立之年，看过世界、摔过跟头。学识、财富、样貌都非平庸之辈，还晓得恰到好处的调情，别开生面的套路。他教我骑马射击高尔夫，我给他讲一个个让人睡不着觉的晚安故事，不沾油盐，不提未来。这个世界上，打发无聊时光的事情有很多，谈恋爱却是最令人振奋的一件事。自情窦初开的15岁，我便瞒着家里偷偷摸摸地早恋。我迷信《恋爱的犀牛》中疯狂偏执的爱情，一个不需要先盘问房子车子票子再决定是否交往的理想世界。但我相逢不了我想要的爱情，以及让我死去活来的爱人。我遇到的都是些分手理由都编不好的凡夫俗子，什么为了你好的陈腔滥调。他们都说以后会有更好的男人给你更好的生活，可是后来的稍微如意点的生活都是我自己给的。那些一蹴而就的爱情，男人不屑为之奋斗，最好能狠狠地揪住他们的头发喂一颗糖。我没打算对七喜丸子寄予厚望，男人的本性其实比女人更善变，所以才有了承诺这种形式主义的东西。我成为七喜丸子的公开女友，公开级别仅限分了组的朋友圈。我问他为什么要叫七喜丸子，他说不为什么，也没有意义。每逢周末我们厮混在一起，一来二去还是没问对方姓名。或者是上过哪间大学，干过什么憋屈的工作，爱过什么不过如此的人这些无聊问题。我们分别侧过身体打字，以维持手机里的形形色色的关系。我们棋逢敌手，不安于室。我用余光瞥见他伸出细长有力的手指，在手机屏幕上不断地切换不同的窗口，回复各色女人的殷勤。尽管早已有了心理建设，心底还是忍不住发出一声冷哼。就像你坚信扭蛋机里你一定会扭到那个最想要的，但一直扭出来的都是你手上已经有的同样货色。但你会安慰自己，真爱来之不易，所以情有可原。在这个速食年代，想要发生一段相互好感的关系，发生性，都太简单太容易了。只要你愿意伸出手指划一划，轻轻点一下社交软件上的匹配，一个个陌生人就会浮现在你的手机屏幕，像超市陈列柜上的土豆任你挑选。当更替一个恋人成本越来越低，真爱也就越来越少。我穿上衣服，离开酒店。七喜丸子探头问了一句，我送你回家？但是没有起身。我笑说不必了，我不喜欢不太熟的人送我回家。独身时害怕孤单无聊，等遇到了能为之精神一振的人时，光是快乐也还不够的。想要对方爱我，并且只爱我，爱了也还没完，想要他懂我，用眼神就能促膝长谈。入秋的第一个周末，趁栖霞山还没被游客淹没之前，七喜丸子买好了机票邀我一起去了南京。我们下榻酒店的时候已经是晚上10点，睡前他告诉我，明天先不去爬山，中午跟他去参加朋友的婚礼。夜里我辗转反侧，起来敷了两次精华面膜，仔细考量旅行箱底侥幸带出门的礼服裙子应该搭配什么妆容。我有预感明天晚上的婚礼一定不简单，也许是他还惦记着的前女友，又或者是多年爱而不得的某某。无论如何，我都不能输。在酒店自助餐厅吃过早餐后，回到房间换衣服。七喜丸子租了一辆银色捷豹带我赴宴，一路上都没说话。我们像是演对手戏的演员，在登台前保持缄默、暗中较量。婚礼摆在户外，秋高气爽景色宜人。经过签到台，见到两位新人在招呼来宾。我听见有人叫新娘的昵称，正是丸子二字。可悲的是女人的第六感往往用于证实假想敌，整个婚宴我陪在七喜丸子身边笑得五味杂陈。直到回到酒店还是没开口问他，我觉得每个人坚持所爱都很牛X，就算被坚持的不是我。至少他还能让我开心，让我在沉闷的生活中贫瘠的心得以抚慰。第三天上午我们出发去了栖霞山，经过禅院中间宽宽的阶梯，双脚踩在渐黄枯脆的树叶上沙沙作响。走出寺院，再往山上走的时候，突然变了天。七喜丸子走在前面，丝毫不在意巨大急促的雨滴拍打在皮肤上。我打开雨伞，跟紧了他，雨越下越大，石阶路上渐渐有黄色的泥浆漫下来。只要一个打滑，马上就能磕破皮肤。偶尔会有毛毛虫，被雨水由树枝上打下来，重重地摔在我的雨伞上。他根本不在乎我害不害怕，也许他只是需要一个同行者。我看见他走在雨中的背影，全身湿透了，头发像苔丝一样粘着额头。我想我大概能猜到他在发泄某种情绪，恨不得掏出身体里脑子里所有尖锐的东西来对抗这场雨，这座山。他要登顶，他想要战胜自己心里的不甘愿。这是再俗套不过的二流故事，作为一个旁观者也许还能为此壮举喝彩几声。但我做不到，我追上前去把背包里的便当和水掏给他，再把雨伞扔到他脚下。他看着我，是一种我从未领略过的复杂眼神。我转身往山下走去，他并没有来追我，本来就凄清的寺院后山越发寒透人心。那种快乐的感觉消失了，就像初生的蓓蕾遭受了冰雹、疾驰的列车驶离了轨道、中奖的彩票不翼而飞。我买了最近一个航班的机票，回到了家。躲在家里捂了两天重感冒，便去上班。我把七喜丸子拉黑了，这是一个删去好友就找不到人的时代，但我其实幻想了他发消息给我的一百种口吻。就这样，半个月过去了，这个长度可以让一个跨国快递漂洋过海，可以让一颗醡浆草长出两拨嫩叶。妈妈说丁立秋跟二姑妈的大学同学的侄女订婚了，一个外科医生，一个内科医生，里应外合，双管齐下。我把七喜丸子从小黑屋里放出来好友列表里，发现他半个月来竟然没有更新朋友圈而大失所望。他出现在我公司楼下的时候，我刚加完三个小时的班，满面油光，双眼黯淡质疑生活。他穿得人模人样风流倜傥，怀里还抱着一束红得发暗的玫瑰。他拦住我，掏出一本户口本就往我怀里塞，我哪里经受过这种场面，两条腿吓得发抖。我一手挡住我的油脸，一边跑走，我说有啥事改天再说，今天诸事不宜。他抓住我的手，用力往回一拉。他说你还记得我们一起看过张国荣张曼玉的《缘分》吗？今天我们就来玩一把缘分游戏，你早我5分钟下地铁，如果我能在末班车之前找到你，我们就删掉手机里所有的备胎和旧情人，你敢不敢？有什么不敢的，这个游戏规则怎么看我都是只赚不赔的那一个。我在他注视下走下了地铁站，我从珠江新城出发，不管往哪个方向都有几个换乘点，可以变幻出许许多多个排列组合。我想发明这个游戏的人，怕是从未想过要玩游戏的人相遇了。我不停地回头看，故意在走出车厢时最显眼的地方晃动。无法否认心里那快乐的小火苗，又再次被扇了风点了火。我希望他找到我。当游戏进行到一个小时的时候，我已经坐到了1号线的终点站西朗。我发了个朋友圈定位在花地大道，安慰自己这样不算作弊。我站在站台，等了半个小时，他还是没有出现。我看见一拨拨下车的人行色匆匆，无暇顾及我的忐忑。我想起《边城》里翠翠的那句话：&ldquo;那个人也许永远不会回来了，也许明天回来。&rdquo;也许女人投身爱情的时候，总是这样在失望中给自己打鸡血。以前我觉得，我们像在荒野中的饥饿野兽，禹禹独行，用触角辨认方向，伸出前肢刺探生活中仅存的兴奋点。爱毕竟是少数让我们感觉到心痛并且贫乏的事。我们对爱情渴望却悲观，于是我们学会用玩世不恭的态度游走其中。可就在此刻，我们想要消灭彼此身上的孤独，让尘世的光可以透进心底。我知道就算这场缘分游戏失败了，我们也可以找各种借口相逢。真爱太难得了，所以快乐已经好不容易。地铁响起清场的广播，我抬起右脚往出站闸口走去。我掏出橙色的地铁卡放在感应器上，&ldquo;滴~&rdquo;的一声响起。同时一双大手伸到我的腰间，将我紧紧拥入怀中。这一刻，恋爱踏踏实实地发生了，我与七喜丸子开始了新的一局爱情游戏。文/Regor_\n  \n  \n\n  \n"
        },
        "share_list": {
          "wx": {
            "title": "音乐 | 捷运爱情游戏",
            "desc": "文/Regor_ 当更替一个恋人成本越来越低，真爱也就越来越少。",
            "link": "http://m.wufazhuce.com/music/2746?channel=singlemessage",
            "imgUrl": "http://image.wufazhuce.com/ONE_logo_120_square.png",
            "audio": ""
          },
          "wx_timeline": {
            "title": "音乐 | 捷运爱情游戏",
            "desc": "文/Regor_ 当更替一个恋人成本越来越低，真爱也就越来越少。",
            "link": "http://m.wufazhuce.com/music/2746?channel=timeline",
            "imgUrl": "http://image.wufazhuce.com/ONE_logo_120_square.png",
            "audio": ""
          },
          "weibo": {
            "title": "ONE一个《音乐 | 捷运爱情游戏》 文/Regor_： 当更替一个恋人成本越来越低，真爱也就越来越少。 阅读全文：http://m.wufazhuce.com/music/2746?channel=weibo 下载ONE一个APP:http://weibo.com/p/100404157874",
            "desc": "",
            "link": "http://m.wufazhuce.com/music/2746?channel=weibo",
            "imgUrl": "",
            "audio": ""
          },
          "qq": {
            "title": "捷运爱情游戏",
            "desc": "当更替一个恋人成本越来越低，真爱也就越来越少。",
            "link": "http://m.wufazhuce.com/music/2746?channel=qq",
            "imgUrl": "http://image.wufazhuce.com/ONE_logo_120_square.png",
            "audio": ""
          }
        },
        "tag_list": [],
        "music_name": "Love Addict",
        "audio_platform_icon": "http://image.wufazhuce.com/FpvA4Zg2Lt6L2EuMknvwwdCC_vk0",
        "audio_platform_name": "看见音乐",
        "audio_author": "Isa Tabasuares",
        "audio_album": "This Mess We Made",
        "cover": "http://image.wufazhuce.com/Fvj6aixDMGZEPE4duQTxXOz3Pk5g",
        "bg_color": "#000"
      },
      {
        "id": "16096",
        "category": "5",
        "display_category": 6,
        "item_id": "1523",
        "title": "谁能告诉我这不是一个梦？",
        "forward": "命运的飘摇，爱情的脆弱，与生活艰难地抵触着，压抑而病态，绝望却又无从察觉那种绝望的深刻性。",
        "img_url": "http://image.wufazhuce.com/FgOQ-JPELEWuDzX1g6jkHeGzwGVM",
        "like_count": 141,
        "post_date": "2018-08-23 06:00:00",
        "last_update_date": "2018-08-23 00:24:13",
        "author": {
          "user_id": "7867217",
          "user_name": "MENG",
          "desc": "MENG，MeRead读书会创办人，不务正业写作者。",
          "wb_name": "@萌之刺刺",
          "is_settled": "0",
          "settled_type": "0",
          "summary": "公众号：MeRead",
          "fans_total": "2691",
          "web_url": "http://image.wufazhuce.com/FtmFi0r5J7VmcqNwE-PyOxxm91LL"
        },
        "video_url": "",
        "audio_url": "",
        "audio_platform": 2,
        "start_video": "",
        "has_reading": 0,
        "volume": 0,
        "pic_info": "",
        "words_info": "",
        "subtitle": "瑞普·凡·温克尔的新娘",
        "number": 0,
        "serial_id": 0,
        "serial_list": [],
        "movie_story_id": "4506",
        "ad_id": 0,
        "ad_type": 0,
        "ad_pvurl": "",
        "ad_linkurl": "",
        "ad_makettime": "",
        "ad_closetime": "",
        "ad_share_cnt": "",
        "ad_pvurl_vendor": "",
        "content_id": "1523",
        "content_type": "5",
        "content_bgcolor": "#FFFFFF",
        "share_url": "http://m.wufazhuce.com/movie/1523",
        "share_info": {
          "url": "http://m.wufazhuce.com/movie/1523",
          "image": "http://image.wufazhuce.com/FgOQ-JPELEWuDzX1g6jkHeGzwGVM",
          "title": "「一个」电影: 瑞普·凡·温克尔的新娘",
          "content": "我并不是一个有岩井俊二情结的文艺青年，在所有岩井的片中，很俗套地喜欢情节比较跌宕的《燕尾蝶》。一直在想，到底独特的属于日本文化的东西是什么？想了又想，在看《樱桃小丸子之来自意大利的少年》时恍然有所感悟。就是一个叫&ldquo;野口笑子&rdquo;的姑娘给我的启发。这个小姑娘总是一脸阴沉，呆若木鸡，幽幽出没于小丸子身边，看上去有很多的心事，就算开心也没什么表情，总之，她就是不像一个正常的小孩。考虑到《樱桃小丸子》是一部多么阳光快乐的动画片，笑子这个人物的存在就显得格外扎眼，然而在小丸子中，笑子是被坦然接受的，没有人（日本人）会觉得她很奇怪，毋宁说，&ldquo;笑子&rdquo;的存在就是日本文化的独特标记。日本的文化中就是有一种&ldquo;日常的压抑&rdquo;，它成为一个正常的现象被普遍接受，没有它反而显得失重。岩井俊二的《瑞普&middot;凡&middot;温克尔的新娘》（又叫《梦之花嫁》）很难一句话说清楚，只能说它围绕着一个初入社会的女性，以及展开在她身边的一连串莫名其妙的遭遇，情节严重跳tone，最后归结到一个奇怪的主题上（这个主题是什么，还有待探讨）。先说说片名，&ldquo;瑞普&middot;凡&middot;温克尔&rdquo;本是美国作家欧文的短篇小说，讲述樵夫瑞普&middot;凡&middot;温克尔在魔法森林里喝了一种饮料，结果一睡就是二十年，醒来的时候整个世界都变得面目全非。岩井俊二在预告片里告诉观众，他就是想讲一个这样的故事，一个女孩子一天醒来，突然发现一切都变了。这让我对影片充满期待。然而电影并不如我想象，反倒像是一个骗局。女主七海是一个有些不谙世事的女生，找工作四处碰壁之后想把自己嫁了。她在网络上认识了男友，两人顺利交往，结婚，一切正常。到了结婚时，由于担心家属不够，于是请来群众演员安室。这个临演是个奇葩，后面会喧宾夺主成为整部剧的灵魂人物。新婚才第二天，七海就发现家里有一只陌生女人的耳环。此时，她做出了第一件反常的事：她没有找丈夫问个清楚，而是找来安室商量对策，因为安室什么业务都接，包括私家侦探&hellip;&hellip;不过请侦探的收费不菲，不知道她哪里来的钱？（关于钱的问题，后文还会提到）后面的情节就开了挂：安室和她进行了推心置腹的谈话，过了一阵便找出了她丈夫的出轨对象：某个中学女同学，还把相册里那个人的照片指给她看。随后一个陌生男子突然找上了门，自称妻子就是和七海男人出轨的对象。两人开始商量对策，不知怎么，男人就开了一间房，把七海带了进去并称&ldquo;报复他们最好的办法就是让我得到你。&rdquo;七海吓得躲进厕所发消息给侦探求救，安室告诉她：你先拖时间，跟他说你要先洗个澡。此时七海做出了第二件令人发指的事：她真的开始脱衣服洗澡，一边委屈地簌簌发抖，那情景仿佛她已经被强奸了。结果是&mdash;&mdash;安室其实和那个男人是串通一气的，他解救七海的同时也不忘录下七海的&ldquo;出轨证据&rdquo;，录像被送到了七海丈夫手里，另一方面却告诉七海，并没有小三，那只耳环是丈夫母亲的，对于相册里女同学的照片不翼而飞，他含混其词的略过不谈，却明确告诉七海，所谓的出轨事件，是婆婆一手导演的，目的就是拆散小两口。呵呵呵，此时的七海不疑有他，把安室的话全盘吃下。然后他们就离婚了！安室此时开始掌握了七海的命运（然而目的何在始终不明，有时似乎是为了诈一笔钱，有时又好像就只是一个尽职尽责的仆人）。他开始帮七海操办各种事情，包括帮她找房子，帮她找工作。七海开始住在旅馆里，安室提醒她这样太贵了，她才恍然大悟。（这时我又出戏了，不禁要问：七海一天正式班都没上过，为什么有那么多钱还一副傻乎乎的样子？）安室找的工作也够奇葩，先是&ldquo;假扮参加婚礼的人&rdquo;，然后又是&ldquo;古堡女佣&rdquo;。（此时我感觉这是一个奇幻片）更奇葩的情节还在后面。到古堡当女佣的次日，七海突然惊讶地发现古堡里的另一个女佣是她在假扮参加婚礼的人时认识的一个女生&mdash;&mdash;真白。然后两个人就开始了一段说不清道不明的&ldquo;友谊&rdquo;。感觉真白对七海有什么企图，可是七海就像傻子一样毫无感觉。七海偶然发现真白其实是AV女优，而且这古堡就是她租下来的（此时我已目瞪口呆）。但是七海就是七海，她什么反应都没有，反而和真白两个人去婚纱店里试婚纱，两个人高高兴兴穿着婚纱回家，倒在床上亲吻（请让我昏过去吧）。两人互相说了&ldquo;我爱你&rdquo;之后，真白问七海：&ldquo;你愿意和我一起死吗？&rdquo;七海傻乎乎回答：&ldquo;愿意&rdquo;。注意，到此为止，我都觉得七海并没有&ldquo;爱上&rdquo;真白，她就是完全被动地接受所有&ldquo;命运&rdquo;的安排，就好像牵线木偶那样顺从听话，可能是天性善良加上智商有限，她又像小狗一样依赖身边每一个人。然而第二天，殡仪馆的人和侦探就赶到了，原来那天晚上真白自杀了（方法是握住一只毒性海螺&hellip;&hellip;）原来真白早就得了癌症，她就想找个人陪她一起死&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;（能想象岩井俊二的脑洞有多深吗？深不可测）还好七海没死。她去参加了真白的葬礼，还和侦探一起把真白的骨灰送到她母亲家。这里又有一个尴尬至极的高潮&hellip;&hellip;真白的母亲耻于女儿做AV，说着说着，竟然当着七海和安室的面把自己脱了个精光，然后说：&ldquo;当众赤身裸体，原来真的很耻辱啊。&rdquo;（啊啊啊啊啊）更精彩的来了，哭得稀里哗啦的安室也把自己脱光了，好啊，一起来啊，他拉着七海，你也脱吧！还好七海这次，大概是唯一一次没有接受安室的安排，她没脱。她就是举着酒说：好好喝，你们也喝啊！然后，然后就没有然后了&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;讲完这个故事，我感觉自己神经又错乱了一次。三个小时，我用了生命中的三个小时，看了一部这样的电影，我都想掐一把大腿，看看这是不是在做梦？如果这是一个梦，也许我更能理解它。我可以理解为做梦者的某种自我感的缺失，迷茫，面对一个充满触角的世界的本能反应，单纯地相信别人，善良，被动，在世上大大小小漩涡中轮转不定，命运的飘摇，爱情的脆弱，与生活艰难地抵触着，压抑而病态，绝望，却又无从察觉那种绝望的深刻性。但我不能原谅导演讲了一个这样毫无节制的故事，就恰似我们不能把梦的报告当成文学作品。无疑岩井俊二还是把一切场景处理得唯美动人，女主也特地选择了文艺感十足女演员黑木华，但是，作为电影来说，它很有问题。有人说什么该片讨论了&ldquo;同性恋的生存困难问题&rdquo;，和&ldquo;AV女优不被家里接受问题&rdquo;，也是够了&hellip;&hellip;岩井俊二只是想表达一个女孩在充满不安的世界上无所适从的迷茫罢了。我想岩井俊二仍然是那个被女生白色的衣角掀起无限向往的初中小男生，仍然在知天命的年龄，写下又美又长的情诗，给他命中所爱的单纯无邪的女孩子们。同时，他也仍然承载着日本文化中&ldquo;日常的压抑&rdquo;，女主七海就是一个性格缺陷特别明显的女孩，她的无知和被动令人瞠目，我已经分不清这到底是导演的故意，还是一种失控。其实真白也一样压抑，只不过她们看上去一个开朗些，一个内向些。在他试图让女孩们飘逸和飞翔的时候，却不得不眼看她们一次次跌断翅膀。"
        },
        "share_list": {
          "wx": {
            "title": "电影 | 谁能告诉我这不是一个梦？",
            "desc": "文/MENG 在他试图让女孩们飘逸和飞翔的时候，却不得不眼看她们一次次跌断翅膀。",
            "link": "http://m.wufazhuce.com/movie/1523?channel=singlemessage",
            "imgUrl": "http://image.wufazhuce.com/ONE_logo_120_square.png",
            "audio": ""
          },
          "wx_timeline": {
            "title": "电影 | 谁能告诉我这不是一个梦？",
            "desc": "文/MENG 在他试图让女孩们飘逸和飞翔的时候，却不得不眼看她们一次次跌断翅膀。",
            "link": "http://m.wufazhuce.com/movie/1523?channel=timeline",
            "imgUrl": "http://image.wufazhuce.com/ONE_logo_120_square.png",
            "audio": ""
          },
          "weibo": {
            "title": "ONE一个《电影 | 谁能告诉我这不是一个梦？》 文/MENG： 在他试图让女孩们飘逸和飞翔的时候，却不得不眼看她们一次次跌断翅膀。 阅读全文：http://m.wufazhuce.com/movie/1523?channel=weibo 下载ONE一个APP:http://weibo.com/p/100404157874",
            "desc": "",
            "link": "http://m.wufazhuce.com/movie/1523?channel=weibo",
            "imgUrl": "",
            "audio": ""
          },
          "qq": {
            "title": "谁能告诉我这不是一个梦？",
            "desc": "在他试图让女孩们飘逸和飞翔的时候，却不得不眼看她们一次次跌断翅膀。",
            "link": "http://m.wufazhuce.com/movie/1523?channel=qq",
            "imgUrl": "http://image.wufazhuce.com/ONE_logo_120_square.png",
            "audio": ""
          }
        },
        "tag_list": []
      },
      {
        "id": "16060",
        "category": "8",
        "display_category": 6,
        "item_id": "2517",
        "title": "晚上 10:30 开播",
        "forward": "",
        "img_url": "http://image.wufazhuce.com/radio_unplay1.png",
        "like_count": 29,
        "post_date": "2018-08-23 00:00:00",
        "last_update_date": "",
        "author": {},
        "content_id": "2517",
        "content_type": "8",
        "share_url": "http://m.wufazhuce.com/radio/2517",
        "share_list": {
          "wx": {
            "title": "深夜电台 | 陪伴你的文艺生活",
            "desc": "每晚22:30开播",
            "link": "http://m.wufazhuce.com/radio/2517?channel=singlemessage",
            "imgUrl": "http://image.wufazhuce.com/ONE_logo_120_square.png",
            "audio": "http://resource.wufazhuce.com/radio_unplay_3.mp3"
          },
          "wx_timeline": {
            "title": "深夜电台 | 陪伴你的文艺生活",
            "desc": "每晚22:30开播",
            "link": "http://m.wufazhuce.com/radio/2517?channel=timeline",
            "imgUrl": "http://image.wufazhuce.com/ONE_logo_120_square.png",
            "audio": "http://resource.wufazhuce.com/6aKE5ZGKLeebtOe7meeahDE=.mp3"
          },
          "weibo": {
            "title": "ONE一个《深夜电台 | 陪伴你的文艺生活》 每晚22:30开播 阅读全文：http://m.wufazhuce.com/radio/2517?channel=weibo 下载ONE一个APP:http://weibo.com/p/100404157874",
            "desc": "",
            "link": "http://m.wufazhuce.com/radio/2517?channel=weibo",
            "imgUrl": "",
            "audio": "http://resource.wufazhuce.com/6aKE5ZGKLeS4u+aSrei:mOWcqOedoe+8jOWNgeeCueWNiuaOkumYnzE=.mp3"
          },
          "qq": {
            "title": "ONE·一个 深夜电台",
            "desc": "每晚22:30开播，陪伴你的文艺生活",
            "link": "http://m.wufazhuce.com/radio/2517?channel=qq",
            "imgUrl": "http://image.wufazhuce.com/ONE_logo_120_square.png",
            "audio": "http://resource.wufazhuce.com/6aKE5ZGKLeaChOaChOeahOaIkei1sOS6hjE=.mp3"
          }
        },
        "tag_list": [],
        "is_regular": 2,
        "default_audios": [
          "http://resource.wufazhuce.com/6aKE5ZGKLeaChOaChOeahOaIkei1sOS6hjE=.mp3",
          "http://resource.wufazhuce.com/6aKE5ZGKLeeOsOWcqOivt+WQkeW3pua7kTE=.mp3",
          "http://resource.wufazhuce.com/6aKE5ZGKLeebtOe7meeahDE=.mp3",
          "http://resource.wufazhuce.com/6aKE5ZGKLeS4u+aSrei:mOWcqOedoe+8jOWNgeeCueWNiuaOkumYnzE=.mp3",
          "http://resource.wufazhuce.com/radio_unplay_3.mp3",
          "http://resource.wufazhuce.com/radio_unplay_4.mp3"
        ]
      }
    ]
    // dispatch(setLoading(false))
    // return dispatch({
    //   type,
    //   data: defaultData
    // })
    dispatch(setLoading(true));
    const list = [];
    date.reduce((prev, next) => {
        return prev.then(_ => axios.get(`/api/channel/one/${next}/成都市`)
          .then(d => list.push(...d.data.data.content_list)))
      }, Promise.resolve())
      .then(_ => dispatch({
        type: type,
        data: list
      }))
      .then(_ => dispatch(setLoading(false)));
  }
}

export function changeCurrentDate(currentDate = "0") {
  return {
    type: CHANGE_CURRENT_DATE,
    currentDate
  }
}
