import { GetStaticProps } from 'next'
import { GenresPage as GenresScreen, IGenresPageProps } from 'pages/genres'
import { commonApi } from 'shared/api'
import { TNextPageAuth } from 'shared/types'

const GenresPage: TNextPageAuth<IGenresPageProps> = (props) => {
  return <GenresScreen {...props} />
}

export const getStaticProps: GetStaticProps<IGenresPageProps> = async () => {
  try {
    const { data } = await commonApi.genres.getCollections()

    return {
      props: {
        collections: data.collections,
      },
    }
  } catch (error) {
    console.log(error)

    return {
      props: {
        collections: [],
      },
    }
  }
}

export default GenresPage
