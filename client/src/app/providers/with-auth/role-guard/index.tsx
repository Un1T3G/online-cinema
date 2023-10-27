import { useAuth } from 'entities/session'
import { useRouter } from 'next/router'
import { PropsWithChildren } from 'react'
import { TTypeRoles } from 'shared/types'

export const RoleGuard = ({
  children,
  isOnlyAdmin,
  isOnlyUser,
}: PropsWithChildren & TTypeRoles) => {
  const { user } = useAuth()
  const router = useRouter()

  if (!isOnlyAdmin && !isOnlyUser) {
    return children
  }

  if (user?.isAdmin) return children

  if (isOnlyAdmin && router.isPreview) {
    router.pathname !== '/404' && router.replace('/404')
    return null
  }

  const isUser = user && !user.isAdmin

  if (isUser && isOnlyUser) return children
  else {
    router.pathname !== '/auth' && router.replace('/auth')
    return null
  }
}
