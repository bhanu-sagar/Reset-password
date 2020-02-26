import axios from 'axios';
const API = 'http://myneighby.herokuapp.com/api/v2/';

const instance = axios.create({
  baseURL: `${API}`
});

instance.defaults.headers.common['Content-Type'] = 'application/json';
instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';
instance.defaults.headers.common['X-Requested-With'] = 'Origin';

export default instance;
