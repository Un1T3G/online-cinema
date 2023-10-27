import { MenuList } from '../menu-list'
import { MenuListSkeleton } from '../menu-list-skeleton'
import { useGenres } from 'entities/genres'
import { useMemo } from 'react'
import { TIconType } from 'shared/ui/icon'

export const GenresList = () => {
  const { isLoading, data } = useGenres()

  const genresItems = useMemo(
    () =>
      data?.data.genres?.map((genre) => ({
        title: genre.name,
        icon: genre.icon as TIconType,
        path: `/genre/${genre.slug}`,
      })),
    [data]
  )

  return isLoading ? (
    <MenuListSkeleton />
  ) : (
    <MenuList title="Genres" items={genresItems ?? []} />
  )
}
