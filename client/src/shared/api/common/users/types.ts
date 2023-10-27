export interface IUser {
  id: number
  email: string
  createdAt: string
  isAdmin: boolean
}

export interface IUserResponse {
  user: IUser
}

export interface IUserListResponse {
  users: IUser[]
  count: number
}
