import { commonInstance } from '../config'

import { IAuthDto, IAuthResponse } from './types'

export const auth = {
  login({ email, password }: IAuthDto) {
    return commonInstance.post<IAuthResponse>('/auth/login', {
      user: {
        email,
        password,
      },
    })
  },

  register({ email, password }: IAuthDto) {
    return commonInstance.post<IAuthResponse>('/auth/register', {
      user: {
        email,
        password,
      },
    })
  },

  refreshToken(refreshToken: string) {
    return commonInstance.post<IAuthResponse>('/auth/refresh-token', {
      token: {
        refreshToken,
      },
    })
  },
}
