import {
  ICollectionListResponse,
  IGenreListResponse,
  IGenreResponse,
  IGenreUpdateDto,
} from '.'
import { commonInstance } from '../config'

export const genres = {
  getGenreBySlug(slug: string) {
    return commonInstance.get<IGenreResponse>(`/genres/by-slug/${slug}`)
  },

  getGenreById(id: number) {
    return commonInstance.get<IGenreResponse>(`/genres/${id}`)
  },

  getAllGenres(searchTerm?: string) {
    return commonInstance.get<IGenreListResponse>('/genres', {
      params: {
        searchTerm,
      },
    })
  },

  getCollections() {
    return commonInstance.get<ICollectionListResponse>('/genres/collections')
  },

  createGenre() {
    return commonInstance.post<IGenreResponse>('/genres')
  },

  deleteGenreById(id: number) {
    return commonInstance.delete<void>(`/genres/${id}`)
  },

  updateGenre(id: number, genre: IGenreUpdateDto) {
    return commonInstance.put<IGenreResponse>(`/genres/${id}`, { genre })
  },
}
