import { GetStaticProps } from 'next'
import { HomePage } from 'pages/home'
import { IHomePageProps } from 'pages/home/ui/types'
import { commonApi } from 'shared/api'
import { TNextPageAuth } from 'shared/types'

const NextHomePage: TNextPageAuth<IHomePageProps> = (props) => {
  return <HomePage {...props} />
}

export const getStaticProps: GetStaticProps<IHomePageProps> = async () => {
  try {
    const result = await Promise.all([
      commonApi.movies.getMovies({ limit: 3 }),
      commonApi.movies.getPopularMovies({ limit: 7 }),
      commonApi.actors.getAllActors({ limit: 7 }),
    ])

    const [heroMovies, trendingMovies, bestActors] = result

    return {
      props: {
        heroMovies: heroMovies.data.movies,
        trendingMovies: trendingMovies.data.movies,
        bestActors: bestActors.data.actors,
      },
    }
  } catch (error) {
    throw error
  }
}

export default NextHomePage
