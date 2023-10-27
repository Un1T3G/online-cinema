import { Catalog } from 'widgets/catalog/ui'

import { IGenreMoviesProps } from './types'

export const GenreMoviesPage = ({ genre, movies }: IGenreMoviesProps) => {
  return (
    <Catalog
      title={genre.name}
      description={genre.description}
      movies={movies}
    />
  )
}
