import { useAuth, userActions } from 'entities/session'
import Cookies from 'js-cookie'
import { useRouter } from 'next/router'
import { ComponentType, useEffect } from 'react'
import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from 'shared/constants/keys'
import { getThunkType } from 'shared/lib/get-thunk-type'
import { toastMe } from 'shared/lib/toastify'
import { useAppDispatch } from 'shared/lib/use-redux'
import { TTypeRoles } from 'shared/types'

import { RoleGuard } from './role-guard'

export const withAuth =
  <T extends object>(Component: ComponentType<T> & { Component: TTypeRoles }) =>
  (props: T & { Component: TTypeRoles }) => {
    const router = useRouter()
    const { user, isLoading } = useAuth()

    const dispatch = useAppDispatch()

    useEffect(() => {
      const accessToken = Cookies.get(ACCESS_TOKEN_KEY)

      if (accessToken) {
        dispatch(userActions.checkAuth()).then(({ type, payload }) => {
          if (getThunkType(type) === 'rejected') {
            toastMe.error(payload as string)
          }
        })
      }
    }, [])

    useEffect(() => {
      const refreshToken = Cookies.get(REFRESH_TOKEN_KEY)

      if (!refreshToken && user && !isLoading) {
        dispatch(userActions.logout()).then(({ type }) => {
          if (getThunkType(type) === 'fulfilled') {
            toastMe.error('Token is expired')
            router.replace(`/auth?redirect=${router.asPath}`)
          }
        })
      }
    }, [router.pathname, user, isLoading])

    const { isOnlyUser, isOnlyAdmin } = props.Component

    return (
      <RoleGuard isOnlyUser={isOnlyUser} isOnlyAdmin={isOnlyAdmin}>
        <Component {...props} />
      </RoleGuard>
    )
  }
