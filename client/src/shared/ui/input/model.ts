import { createContext } from 'react'

export interface IInputContext {
  inputId?: string
  hasLeftElement: boolean
  hasRightElement: boolean
  setInputId: (value?: string) => void
  setHasLeftElement: (value: boolean) => void
  setHasRightElement: (value: boolean) => void
}

export const InputContext = createContext({} as IInputContext)
