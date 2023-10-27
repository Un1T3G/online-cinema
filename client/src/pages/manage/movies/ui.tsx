import { useMovieCreate, useMovieDelete } from 'features/movies'
import { useRouter } from 'next/router'
import { errorCatch } from 'shared/lib/api'
import { toastMe } from 'shared/lib/toastify'
import { useEvent } from 'shared/lib/use-event'
import { LoadingButton } from 'shared/ui/button'
import { AdminHeader, AdminLayout, AdminTable } from 'widgets/admin'

import { AdminMoviesHeader } from './config'
import { useAdminMovies } from './lib/use-admin-movies'

export const AdminPanelMoviesPage = () => {
  const { searchTerm, setSearchTerm, items, refetch } = useAdminMovies()

  const getEditUrl = useEvent((id: number) => {
    return `/manage/movie/edit/${id}`
  })

  const { mutateAsync: deleteMovieMutate } = useMovieDelete()

  const deleteMovie = useEvent((id: number) => {
    deleteMovieMutate({ id })
      .then(() => {
        refetch()
        toastMe.success('Movie deleted successfully')
      })
      .catch((error) => {
        toastMe.error(errorCatch(error))
      })
  })

  const { mutateAsync: createMovieMutate, isLoading } = useMovieCreate()

  const router = useRouter()

  const handleOnClickActionButton = useEvent(() => {
    createMovieMutate()
      .then(({ data }) => {
        toastMe.success('Movie created successfully')
        router.push(`/manage/movie/edit/${data.movie.id}`)
      })
      .catch((error) => {
        toastMe.error(errorCatch(error))
      })
  })

  return (
    <AdminLayout title="Movies">
      <AdminHeader
        searchTerm={searchTerm}
        onChangeSearchTerm={setSearchTerm}
        renderActionButton={
          <LoadingButton
            loading={isLoading}
            onClick={handleOnClickActionButton}
          >
            Create movie
          </LoadingButton>
        }
      />
      {items && (
        <AdminTable
          header={AdminMoviesHeader}
          rows={items}
          getEditUrl={getEditUrl}
          onDeleteItem={deleteMovie}
        />
      )}
    </AdminLayout>
  )
}
