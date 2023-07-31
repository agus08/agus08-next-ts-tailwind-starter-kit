import {
  LoginData,
  LoginResponse,
  RegisterData,
  RegisterResponse,
  ResetPasswordRequest,
} from './interface'
import utils from '@helpers/utils'
import http from '@helpers/http'

const api = {
  login(data: LoginData) {
    return utils.apiHandler<LoginResponse>(
      http.post(`api/${utils.apiVersion}/auth/login`, data)
    )
  },
  register(data: RegisterData) {
    return utils.apiHandler<RegisterResponse>(
      http.post(`api/${utils.apiVersion}/auth/register`, data)
    )
  },
  requestResetPassword(data: ResetPasswordRequest) {
    return utils.apiHandler<string[]>(
      http.post(`api/${utils.apiVersion}/auth/request-reset-password`, data)
    )
  },
  verify(token: string) {
    return utils.apiHandler<string>(
      http.put(`api/${utils.apiVersion}/otp/email/verify`, { token })
    )
  },
  resendEmail(email: string) {
    return utils.apiHandler<string>(
      http.post(`api/${utils.apiVersion}/otp/email/resend`, { email })
    )
  },
}

export default api
