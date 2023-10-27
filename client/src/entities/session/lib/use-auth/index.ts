import { useAppSelector } from 'shared/lib/use-redux'

export const useAuth = () => {
  const state = useAppSelector((state) => state.user)
  return state
}
