import { useRouter } from 'next/router'
import { IMovie } from 'shared/api'
import { useEvent } from 'shared/lib/use-event'
import { Button } from 'shared/ui/button'
import { Title } from 'shared/ui/title'

import { MovieItem } from './item'
import { MovieList } from './list'
import { MovieListSkeleton } from './skeleton'

interface IProps {
  title: string
  movies: IMovie[]
  isLoading: boolean
  navigatePath: string
  className?: string
}

export const SidebarMovieList = ({
  title,
  movies,
  isLoading,
  navigatePath,
  className,
}: IProps) => {
  const router = useRouter()

  const handleOnClick = () =>
    useEvent(() => {
      router.push(navigatePath)
    })

  return (
    <div className={className}>
      {isLoading ? (
        <MovieListSkeleton />
      ) : (
        <>
          <Title variant="xl" text={title} className="px-5 mb-3" />
          <MovieList
            movies={movies}
            renderItem={(movie) => <MovieItem movie={movie} />}
          />
          <div className="px-5 mt-3">
            <Button onClick={handleOnClick} className="w-full">
              Show more
            </Button>
          </div>
        </>
      )}
    </div>
  )
}
