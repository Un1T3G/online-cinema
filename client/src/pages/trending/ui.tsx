import { Catalog } from 'widgets/catalog/ui'

import { ITrendingPageProps } from './types'

export const TrendingPage = ({ movies }: ITrendingPageProps) => {
  return (
    <Catalog
      title="Trending"
      description="Trending movies in excellent quality: legal, safe, without ads"
      movies={movies}
    />
  )
}
