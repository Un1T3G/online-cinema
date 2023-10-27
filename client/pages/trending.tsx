import { GetStaticProps } from 'next'
import {
  ITrendingPageProps,
  TrendingPage as TrendingScreen,
} from 'pages/trending'
import { commonApi } from 'shared/api'
import { TNextPageAuth } from 'shared/types'

const TrendingPage: TNextPageAuth<ITrendingPageProps> = (props) => {
  return <TrendingScreen {...props} />
}

export const getStaticProps: GetStaticProps<ITrendingPageProps> = async () => {
  try {
    const { data } = await commonApi.movies.getPopularMovies()

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

export default TrendingPage
