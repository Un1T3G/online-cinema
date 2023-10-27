import { commonInstance } from '../config'
import { IFeedWithSearchTerm } from 'shared/api/common/types'

import {
  IMovie,
  IMovieListResponse,
  IMovieResponse,
  IMovieUpdateDto,
} from './types'

export const movies = {
  createMovie() {
    return commonInstance.post<IMovieResponse>('/movies')
  },

  deleteMovieById(id: number) {
    return commonInstance.delete<VoidFunction>(`/movies/${id}`)
  },

  getMovieBySlug(slug: string) {
    return commonInstance.get<IMovieResponse>(`/movies/by-slug/${slug}`)
  },

  getMovieById(id: number) {
    return commonInstance.get<IMovieResponse>(`/movies/${id}`)
  },

  getMoviesByGenres(genreIds: number[]) {
    return commonInstance.post<IMovieListResponse>('/movies/by-genres', {
      genreIds,
    })
  },

  getMoviesByActor(actorId: number) {
    return commonInstance.get<IMovieListResponse>(`/movies/by-actor/${actorId}`)
  },

  getMovies(feed?: IFeedWithSearchTerm) {
    return commonInstance.get<IMovieListResponse>('/movies', {
      params: {
        searchTerm: feed?.searchTerm,
        limit: feed?.limit,
        offset: feed?.offset,
      },
    })
  },

  getPopularMovies(feed?: IFeedWithSearchTerm) {
    return commonInstance.get<IMovieListResponse>('/movies/most-popular', {
      params: {
        searchTerm: feed?.searchTerm,
        limit: feed?.limit,
        offset: feed?.offset,
      },
    })
  },

  updateMovie(id: number, movie: IMovieUpdateDto) {
    return commonInstance.put<IMovieResponse>(`/movies/${id}`, { movie })
  },

  incrementOpened(slug: string) {
    return commonInstance.post<IMovieResponse>('/movies/update-count-opened', {
      slug,
    })
  },
}
