import { createContext } from 'react'

interface ITabsContext {
  value?: any
  onChange: (value?: any) => void
}

export const TabsContext = createContext<ITabsContext>({} as ITabsContext)
