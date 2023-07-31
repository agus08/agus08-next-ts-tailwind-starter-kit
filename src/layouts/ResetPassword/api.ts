import { ResetNewPasswordRequest } from './interface'
import utils from '@helpers/utils'
import http from '@helpers/http'

const api = {
  resetPassword(data: ResetNewPasswordRequest) {
    return utils.apiHandler<{ data: string }>(
      http.put(`api/${utils.apiVersion}/auth/reset-password`, data)
    )
  },
}

export default api
