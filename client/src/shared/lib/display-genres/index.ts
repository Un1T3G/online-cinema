import { IGenre } from 'shared/api'

export const displayGenres = (genres: IGenre[], separator = ', ') => {
  return genres.map((genre) => genre.name).join(separator)
}
