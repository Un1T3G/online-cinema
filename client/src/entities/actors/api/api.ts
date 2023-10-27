import { AxiosResponse } from 'axios'
import { UseQueryOptions, useQuery } from 'react-query'
import { IActorResponse, IFeedWithSearchTerm, commonApi } from 'shared/api'

export const useActors = (feed?: IFeedWithSearchTerm) => {
  return useQuery(['actors'].concat(feed ? Object.values(feed) : []), () =>
    commonApi.actors.getAllActors(feed)
  )
}

export const useActorById = (
  id: number,
  options?: Omit<
    UseQueryOptions<AxiosResponse<IActorResponse, any>>,
    'queryFn' | 'queryKey'
  >
) => {
  return useQuery(
    ['actor', id],
    () => commonApi.actors.getActorById(id),
    options
  )
}
