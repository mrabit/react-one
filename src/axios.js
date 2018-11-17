import axios from 'axios';
import md5 from 'md5';

const secret_key = '519296987',
  version = "1.1.3";



axios.interceptors.request.use(config => {
  const timestamp = new Date()
    .getTime();
  const secretoken = md5(`${timestamp}-${secret_key}`);
  config.headers = Object.assign({}, config.headers, {
    timestamp,
    secretoken,
    version
  })
  return config;
}, err => {
  return Promise.reject(err);
});

export default axios
