import { useAuth } from 'entities/session'
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export const useAuthRedirect = () => {
  const [canRedirect, setCanRedirect] = useState(false)

  const { user, isLoading } = useAuth()

  const router = useRouter()

  const searchParams = useSearchParams()

  useEffect(() => {
    if (isLoading) {
      setCanRedirect(true)
    }
  }, [isLoading])

  useEffect(() => {
    if (canRedirect && user) {
      const redirectUrl = searchParams?.get('redirect')
      router.push(redirectUrl ?? '/')
    }
  }, [canRedirect, user])
}
