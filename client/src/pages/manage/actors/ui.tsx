import { useActorCreate, useActorDelete } from 'features/actors'
import { errorCatch } from 'shared/lib/api'
import { toastMe } from 'shared/lib/toastify'
import { useEvent } from 'shared/lib/use-event'
import { LoadingButton } from 'shared/ui/button'
import { AdminHeader, AdminLayout, AdminTable } from 'widgets/admin'

import { AdminActorsHeader } from './config'
import { useAdminActors } from './lib/use-admin-actors'

export const AdminPanelActorsPage = () => {
  const { searchTerm, setSearchTerm, items, refetch } = useAdminActors()

  const getEditUrl = useEvent((id: number) => {
    return `/manage/actor/edit/${id}`
  })

  const { mutateAsync: deleteActorMutate } = useActorDelete()

  const deleteActor = useEvent((id: number) => {
    deleteActorMutate({ id })
      .then(() => {
        refetch()
        toastMe.success('Actor deleted successfully')
      })
      .catch((error) => {
        toastMe.error(errorCatch(error))
      })
  })

  const { mutateAsync: createActorMutate, isLoading } = useActorCreate()

  const createActor = useEvent(() => {
    createActorMutate()
      .then(() => {
        toastMe.success('Actor created successfully')
      })
      .catch((error) => {
        toastMe.error(errorCatch(error))
      })
  })

  return (
    <AdminLayout title="Actors">
      <AdminHeader
        searchTerm={searchTerm}
        onChangeSearchTerm={setSearchTerm}
        renderActionButton={
          <LoadingButton loading={isLoading} onClick={createActor}>
            Create actor
          </LoadingButton>
        }
      />
      {items && (
        <AdminTable
          header={AdminActorsHeader}
          rows={items}
          getEditUrl={getEditUrl}
          onDeleteItem={deleteActor}
        />
      )}
    </AdminLayout>
  )
}
