import { commonInstance } from '../config'
import { IMovieListResponse } from '../movies'
import { IAuthDto, IFeed, IFeedWithSearchTerm } from '../types'

import { IUserListResponse, IUserResponse } from './types'

export const users = {
  getUsers(query?: IFeedWithSearchTerm) {
    return commonInstance.get<IUserListResponse>('/users', {
      params: {
        limit: query?.limit,
        offset: query?.offset,
        searchTerm: query?.searchTerm,
      },
    })
  },

  async getProfile() {
    return commonInstance.get<IUserResponse>('/users/profile')
  },

  async updateProfile(props: Partial<IAuthDto>) {
    return commonInstance.put<IUserResponse>('/users/profile', {
      user: {
        email: props.email,
        password: props.password,
      },
    })
  },

  async getUserById(id: number) {
    return commonInstance.get<IUserResponse>(`/users/${id}`)
  },

  async updateUserById(id: number, email?: string, password?: string) {
    return commonInstance.put<IUserResponse>(`/users/${id}`, {
      user: {
        email,
        password,
      },
    })
  },

  async deleteUserById(id: number) {
    return commonInstance.delete<IUserResponse>(`/users/${id}`)
  },

  async getUsersCount() {
    return commonInstance.get<number>('/users/count')
  },

  async getUserFavorites(query?: IFeed) {
    return commonInstance.get<IMovieListResponse>('/users/profile/favorites', {
      params: {
        limit: query?.limit,
        offset: query?.offset,
      },
    })
  },

  async toggleFavorite(movieId: number) {
    return commonInstance.post<IMovieListResponse>('/users/profile/favorites', {
      movieId,
    })
  },
}
