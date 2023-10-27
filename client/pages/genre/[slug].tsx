import { GetStaticPaths, GetStaticProps } from 'next'
import {
  GenreMoviesPage as GenreMoviesScreen,
  IGenreMoviesProps,
} from 'pages/genre-movies'
import { commonApi } from 'shared/api'
import { TNextPageAuth } from 'shared/types'

const GenreMoviesPage: TNextPageAuth<IGenreMoviesProps> = (props) => {
  return <GenreMoviesScreen {...props} />
}

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const { data } = await commonApi.genres.getAllGenres()
    const paths = data.genres.map((genre) => ({
      params: { slug: genre.slug },
    }))

    return {
      paths,
      fallback: 'blocking',
    }
  } catch (e) {
    // console.log(errorCatch(e))

    return {
      paths: [],
      fallback: false,
    }
  }
}

export const getStaticProps: GetStaticProps<IGenreMoviesProps> = async ({
  params,
}) => {
  try {
    const {
      data: { genre },
    } = await commonApi.genres.getGenreBySlug(String(params?.slug))

    const {
      data: { movies },
    } = await commonApi.movies.getMoviesByGenres([genre.id])

    return {
      props: { movies, genre },
    }
  } catch (e) {
    console.log(e)

    return {
      props: {
        genre: null as any,
        movies: [],
      },
      notFound: true,
    }
  }
}

export default GenreMoviesPage
