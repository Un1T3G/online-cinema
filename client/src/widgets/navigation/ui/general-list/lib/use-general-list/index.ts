import { useAuth } from 'entities/session'
import { useRouter } from 'next/router'
import { toastMe } from 'shared/lib/toastify'
import { useActions } from 'shared/lib/use-actions'
import { IMenuItem } from 'widgets/navigation/ui/menu-list'

export const useGeneralList = (): IMenuItem[] => {
  const { user } = useAuth()

  const { logout } = useActions()

  const router = useRouter()

  const handleLogout = () => {
    logout()
    router.push('/auth')
    toastMe.success('Logout successfully')
  }

  if (user) {
    if (user.isAdmin) {
      return [
        {
          title: 'Profile',
          icon: 'MdPerson',
          path: '/profile',
        },
        {
          title: 'Admin panel',
          icon: 'MdAdminPanelSettings',
          path: '/manage',
        },
        {
          title: 'Logout',
          icon: 'MdLogout',
          onClick: handleLogout,
        },
      ]
    }

    return [
      {
        title: 'Profile',
        icon: 'MdPerson',
        path: '/profile',
      },
      {
        title: 'Logout',
        icon: 'MdLogout',
        onClick: handleLogout,
      },
    ]
  }

  return [
    {
      title: 'Login',
      icon: 'MdLogin',
      path: '/auth',
    },
  ]
}
