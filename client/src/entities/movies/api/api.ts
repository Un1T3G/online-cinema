import { AxiosResponse } from 'axios'
import { UseQueryOptions, useQuery } from 'react-query'
import {
  IFeedWithSearchTerm,
  IMovieListResponse,
  IMovieResponse,
  commonApi,
} from 'shared/api'

export const useMovies = (
  feed?: IFeedWithSearchTerm,
  options?: Omit<
    UseQueryOptions<AxiosResponse<IMovieListResponse, any>>,
    'queryFn' | 'queryKey'
  >
) => {
  return useQuery(
    ['movies'].concat(feed ? Object.values(feed) : []),
    () => commonApi.movies.getMovies(feed),
    options
  )
}

export const useMostPopularMovies = (
  feed?: IFeedWithSearchTerm,
  options?: Omit<
    UseQueryOptions<AxiosResponse<IMovieListResponse, any>>,
    'queryFn' | 'queryKey'
  >
) => {
  return useQuery(
    ['popular movies'].concat(feed ? Object.values(feed) : []),
    () => commonApi.movies.getPopularMovies(feed),
    options
  )
}

export const useMovieById = (
  movieId: number,
  options?: Omit<
    UseQueryOptions<AxiosResponse<IMovieResponse, any>>,
    'queryFn' | 'queryKey'
  >
) => {
  return useQuery(
    ['movie', movieId],
    () => commonApi.movies.getMovieById(movieId),
    options
  )
}
