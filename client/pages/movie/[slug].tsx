import { GetStaticPaths, GetStaticProps } from 'next'
import { IMoviePageProps, MoviePage as MovieScreen } from 'pages/movie'
import { commonApi } from 'shared/api'
import { TNextPageAuth } from 'shared/types'

const MoviePage: TNextPageAuth<IMoviePageProps> = (props) => {
  return <MovieScreen {...props} />
}

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const {
      data: { movies },
    } = await commonApi.movies.getMovies()
    const paths = movies.map((movie) => ({
      params: { slug: movie.slug },
    }))

    return { paths, fallback: 'blocking' }
  } catch {
    return {
      paths: [],
      fallback: false,
    }
  }
}

export const getStaticProps: GetStaticProps<IMoviePageProps> = async ({
  params,
}) => {
  try {
    const {
      data: { movie },
    } = await commonApi.movies.getMovieBySlug(String(params?.slug))

    const genreIds = movie.genres.map((x) => x.id)

    const {
      data: { movies },
    } = await commonApi.movies.getMoviesByGenres(genreIds)

    return {
      props: {
        movie,
        similarMovies: movies,
      },
    }
  } catch (error) {
    console.log(error)

    return {
      notFound: true,
    }
  }
}

export default MoviePage
