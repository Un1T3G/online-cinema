import { IGenresPageProps } from '../types'
import { NextSeo } from 'next-seo'
import { Description } from 'shared/ui/description/ui'
import { Title } from 'shared/ui/title'

import { CollectionsList } from './collections-list'

const title = 'Discovery'
const description = 'In this section you will find all genres on our site'

export const GenresPage = ({ collections }: IGenresPageProps) => {
  return (
    <>
      <NextSeo title={title} description={description} />
      <Title variant="lg" text={title} className="mb-3" />
      <Description text={description} className="mb-6" />
      <CollectionsList collections={collections} />
    </>
  )
}
