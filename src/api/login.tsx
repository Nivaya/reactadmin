import request from "../utils/request";

export function doLogin(admin:any) {
  return request.post<any, ResponseSuccess<{ token: string }>>(
    'admin/login',
    admin
  )
}
