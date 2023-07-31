import axios, { AxiosResponse } from 'axios'
import { Response } from '@interface'

const utils = {
  apiVersion: process.env.NEXT_PUBLIC_API_VERSION || 'v1',
  async apiHandler<T>(
    request: Promise<AxiosResponse<Response<T>>>
  ): Promise<Response<T>> {
    try {
      return (await request).data
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      if (axios.isAxiosError(error)) {
        return Promise.reject(error.response?.data)
      }
      throw new Error(error)
    }
  },
  toRp(value: number): string {
    return `Rp ${(+value).toLocaleString('id')}`
  },
}

export default utils
