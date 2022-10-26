import axios from "axios";
import { useCookies, Cookies } from "react-cookie";

const cookie = new Cookies();

const request = axios.create({
  timeout: 10000
})


request.interceptors.request.use(
  (config) => {
    const csrf = cookie.get('csrftoken');
    console.log(csrf)
    if (csrf) {
      config.headers = {...config.headers, 'X-CSRFToken': csrf};
    }
    return config
  }, error => {
    console.log(error);
    return Promise.reject(error);
  })

request.interceptors.response.use(
  (res) => {
    return res
  }, error => {
    console.log(error);
    return Promise.reject(error);
  })

export default request