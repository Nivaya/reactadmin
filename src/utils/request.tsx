import axios from "axios";
import { useCookies, Cookies } from "react-cookie";

const request = axios.create({
  timeout: 10000
})

request.interceptors.request.use(
  (config) => {
    // const [csrf,] = useCookies(['csrftoken']);
    const cookie = new Cookies()
    const csrf = cookie.get('csrftoken')
    if (csrf) config.headers = {...config.headers, 'X-CSRFToken': csrf};
    return config
  })

request.interceptors.response.use(
  (res) => {
    return res.data
  }, (err) => {
    console.log(err);
    return Promise.reject(err);
  })

export default request