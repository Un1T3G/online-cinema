import { IFreshMoviesPageProps } from '.'
import { Catalog } from 'widgets/catalog/ui'

export const FreshMoviesPage = ({ movies }: IFreshMoviesPageProps) => {
  return (
    <Catalog
      title="Fresh movies"
      description="New movies and series in excellent quality: legal, safe, without ads"
      movies={movies}
    />
  )
}
