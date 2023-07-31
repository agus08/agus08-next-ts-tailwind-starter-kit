import axios, { AxiosRequestConfig } from 'axios'
import { toast } from 'react-toastify'
import sessions from '@helpers/sessions'

const baseURL = process.env.NEXT_PUBLIC_API_URL
const http = axios.create({ baseURL })

http.interceptors.request.use((axiosConfig: AxiosRequestConfig) => {
  const httpConfig = { ...axiosConfig }
  const userToken = sessions.getToken()
  if (userToken && !['null', 'undefined'].includes(userToken)) {
    httpConfig.headers.Authorization = `Bearer ${userToken}`
  }
  return httpConfig
})

http.interceptors.response.use(
  (res) => res,
  (error) => {
    if (error.response) {
      const { code } = error.response.data
      if (code === 500) {
        toast.error(error.response.data.messages[0])
      } else if (code === 403) {
        sessions.logout()
      }
    }
    return Promise.reject(error)
  }
)

export default http
