import { NextSeo } from 'next-seo'
import { Title } from 'shared/ui/title'

import { FavoriteMoviesList } from './favorite-movies-list/'

export const FavoritesPage = () => {
  return (
    <>
      <NextSeo title="Favorites" />
      <Title text="Favorites" variant="lg" className="mb-5" />
      <FavoriteMoviesList />
    </>
  )
}
