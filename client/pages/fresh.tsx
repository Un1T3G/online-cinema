import { GetStaticProps } from 'next'
import {
  FreshMoviesPage as FreshMoviesScreen,
  IFreshMoviesPageProps,
} from 'pages/fresh'
import { commonApi } from 'shared/api'
import { TNextPageAuth } from 'shared/types'

const FreshMoviesPage: TNextPageAuth<IFreshMoviesPageProps> = (props) => {
  return <FreshMoviesScreen {...props} />
}

export const getStaticProps: GetStaticProps<
  IFreshMoviesPageProps
> = async () => {
  try {
    const { data } = await commonApi.movies.getMovies()

    return {
      props: {
        movies: data.movies,
      },
    }
  } catch (error) {
    console.log(error)

    return {
      props: {
        movies: [],
      },
    }
  }
}

export default FreshMoviesPage
