import { AxiosResponse } from 'axios'
import { UseQueryOptions, useQuery } from 'react-query'
import { IFeedWithSearchTerm, IMovieListResponse, commonApi } from 'shared/api'

export const useUsersCount = () => {
  return useQuery(['users count'], () => commonApi.users.getUsersCount())
}

export const useUsers = (feed?: IFeedWithSearchTerm) => {
  return useQuery(['users'].concat(feed ? Object.values(feed) : []), () =>
    commonApi.users.getUsers(feed)
  )
}

export const useUserFavorites = (
  feed?: IFeedWithSearchTerm,
  options?: Omit<
    UseQueryOptions<AxiosResponse<IMovieListResponse, any>>,
    'queryFn' | 'queryKey'
  >,
  additionsDeps?: any[]
) => {
  return useQuery(
    ['favorites movies']
      .concat(feed ? Object.keys(feed) : [])
      .concat(additionsDeps ? additionsDeps : []),
    () => commonApi.users.getUserFavorites(feed),
    options
  )
}
