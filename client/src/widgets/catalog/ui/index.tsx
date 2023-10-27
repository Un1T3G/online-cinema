import { NextSeo } from 'next-seo'
import { IMovie } from 'shared/api'
import { onlyText } from 'shared/lib/string'
import { Description } from 'shared/ui/description/ui'
import { Title } from 'shared/ui/title'

import { MoviesList } from './movies-list'

interface IProps {
  title: string
  description?: string
  movies: IMovie[]
}

export const Catalog = ({ title, description, movies }: IProps) => {
  return (
    <>
      <NextSeo title={title} description={description} />
      <Title variant="lg" text={title} className="mb-3" />
      {description && (
        <Description text={onlyText(description)} className="mb-6" />
      )}
      <MoviesList movies={movies} />
    </>
  )
}
