import { commonApi } from '.'
import axios from 'axios'
import Cookies from 'js-cookie'
import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from 'shared/constants/keys'
import { errorCatch } from 'shared/lib/api'

export const commonInstance = axios.create({
  baseURL: `${process.env.APP_SERVER_URL}/api`,
})

commonInstance.interceptors.request.use((config) => {
  const accessToken = Cookies.get(ACCESS_TOKEN_KEY)

  if (config.headers && accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`
  }

  return config
})

commonInstance.interceptors.response.use(
  (config) => config,
  async (error) => {
    const originalRequest = error.config

    if (
      (error.response.status === 401 ||
        errorCatch(error) === 'jwt expired' ||
        errorCatch(error) === 'jwt must be provided') &&
      error.config &&
      !error.config._isRetry
    ) {
      originalRequest._isRetry = true
      try {
        const refreshToken = Cookies.get(REFRESH_TOKEN_KEY)!
        await commonApi.auth.refreshToken(refreshToken)

        console.log('token is refreshed')

        return commonInstance.request(originalRequest)
      } catch (e: any) {
        if (e.response && errorCatch(e) === 'jwt expired') {
          Cookies.remove(REFRESH_TOKEN_KEY)
          Cookies.remove(ACCESS_TOKEN_KEY)
        }
      }
    }

    throw error
  }
)
