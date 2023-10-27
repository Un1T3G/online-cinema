import { IMoviePageProps } from '..'
import { useMovieOpenedIncrement } from '../lib/use-movie-opened-increment'
import { NextSeo } from 'next-seo'

import { Footer } from './footer'
import { Hero } from './hero'
import { Player } from './player'
import { SimilarMovies } from './similar-movies'

export const MoviePage = ({ movie, similarMovies }: IMoviePageProps) => {
  useMovieOpenedIncrement(movie.slug)

  return (
    <>
      <NextSeo title={movie.title} />
      <Hero
        id={movie.id}
        title={movie.title}
        bigPoster={movie.bigPoster}
        parameters={movie.parameters}
        actors={movie.actors}
        genres={movie.genres}
        rating={movie.rating}
      />
      <Player videoUrl={movie.videoUrl} />
      <SimilarMovies movies={similarMovies} />
      <Footer movieId={movie.id} />
    </>
  )
}
