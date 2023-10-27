import { useGenreDelete, useGenresCreate } from 'features/genres'
import { useRouter } from 'next/router'
import { errorCatch } from 'shared/lib/api'
import { toastMe } from 'shared/lib/toastify'
import { useEvent } from 'shared/lib/use-event'
import { LoadingButton } from 'shared/ui/button'
import { AdminHeader, AdminLayout, AdminTable } from 'widgets/admin'

import { AdminGenresHeader } from './config'
import { useAdminGenres } from './lib/use-admin-genres'

export const AdminPanelGenresPage = () => {
  const { searchTerm, setSearchTerm, items, refetch } = useAdminGenres()

  const getEditUrl = useEvent((id: number) => {
    return `/manage/genre/edit/${id}`
  })

  const { mutateAsync: genreDeleteMutate } = useGenreDelete()

  const deleteGenre = useEvent((id: number) => {
    genreDeleteMutate({ id })
      .then(() => {
        refetch()
        toastMe.success('Genre deleted successfully')
      })
      .catch((error) => {
        toastMe.error(errorCatch(error))
      })
  })

  const { mutateAsync: createGenreMutate, isLoading } = useGenresCreate()

  const router = useRouter()

  const handleOnClickActionButton = useEvent(() => {
    createGenreMutate()
      .then(({ data }) => {
        toastMe.success('Genre created successfully')
        router.push(`/manage/movie/edit/${data.genre.id}`)
      })
      .catch((error) => {
        toastMe.error(errorCatch(error))
      })
  })

  return (
    <AdminLayout title="Genres">
      <AdminHeader
        searchTerm={searchTerm}
        onChangeSearchTerm={setSearchTerm}
        renderActionButton={
          <LoadingButton
            loading={isLoading}
            onClick={handleOnClickActionButton}
          >
            Create genre
          </LoadingButton>
        }
      />
      {items && (
        <AdminTable
          header={AdminGenresHeader}
          rows={items}
          getEditUrl={getEditUrl}
          onDeleteItem={deleteGenre}
        />
      )}
    </AdminLayout>
  )
}
