import { IUser } from '../users'

export interface IToken {
  accessToken: string
  refreshToken: string
}

export interface IAuthResponse extends IToken {
  user: IUser
}

export interface IAuthDto {
  email: string
  password: string
}
