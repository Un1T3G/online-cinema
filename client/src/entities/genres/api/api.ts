import { AxiosResponse } from 'axios'
import { UseQueryOptions, useQuery } from 'react-query'
import { IGenreResponse, commonApi } from 'shared/api'

export const useGenres = (searchTerm?: string) => {
  return useQuery(['genres', searchTerm], () =>
    commonApi.genres.getAllGenres(searchTerm)
  )
}

export const useCollections = () => {
  return useQuery(['collections'], () => commonApi.genres.getCollections(), {
    select: ({ data }) => data.collections,
  })
}

export const useGenreBySlug = (slug: string) => {
  return useQuery(
    ['genre', slug],
    () => commonApi.genres.getGenreBySlug(slug),
    {
      select: ({ data }) => data.genre,
    }
  )
}

export const useGenreById = (
  id: number,
  options?: Omit<
    UseQueryOptions<AxiosResponse<IGenreResponse, any>>,
    'queryKey' | 'queryFn'
  >
) => {
  return useQuery(
    ['genre', id],
    () => commonApi.genres.getGenreById(id),
    options
  )
}
