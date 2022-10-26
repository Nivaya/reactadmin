import request from "../utils/request";
import { UserLogin } from "../interfaces/login";


export function doLogin(admin: UserLogin) {
  return request.post(
    'admin/login',
    admin
  )
}
