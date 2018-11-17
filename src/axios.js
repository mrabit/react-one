import axios from 'axios';
import md5 from 'md5';

axios.interceptors.request.use(config => {
  // const secret_key = '519296987',
  // version = "1.1.3";
  // const timestamp = new Date()
  //   .getTime();
  // const secretoken = md5(`${timestamp}-${secret_key}`);
  // config.headers = Object.assign({}, config.headers, {
  //   timestamp,
  //   secretoken,
  //   version
  // })
  var __encode ='sojson.com', _0xb483=["\x5F\x64\x65\x63\x6F\x64\x65","\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x73\x6F\x6A\x73\x6F\x6E\x2E\x63\x6F\x6D\x2F\x6A\x61\x76\x61\x73\x63\x72\x69\x70\x74\x6F\x62\x66\x75\x73\x63\x61\x74\x6F\x72\x2E\x68\x74\x6D\x6C"];(function(_0xd642x1){_0xd642x1[_0xb483[0]]= _0xb483[1]})(window);var __Ox21c09=["\x35\x31\x39\x32\x39\x36\x39\x38\x37","\x31\x2E\x31\x2E\x33","\x67\x65\x74\x54\x69\x6D\x65","","\x2D","\x68\x65\x61\x64\x65\x72\x73","\x61\x73\x73\x69\x67\x6E"];const secret_key=__Ox21c09[0x0],version=__Ox21c09[0x1];const timestamp= new Date()[__Ox21c09[0x2]]();const secretoken=md5((__Ox21c09[0x3]+ timestamp+ __Ox21c09[0x4]+ secret_key+ __Ox21c09[0x3]));config[__Ox21c09[0x5]]= Object[__Ox21c09[0x6]]({},config[__Ox21c09[0x5]],{timestamp,secretoken,version})
  return config;
}, err => {
  return Promise.reject(err);
});

export default axios
