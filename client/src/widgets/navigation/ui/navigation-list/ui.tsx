import { MenuList } from '../menu-list/ui'

import { NavigationListConfig } from './config'

export const NavigationList = () => {
  return <MenuList title="Menu" items={NavigationListConfig} />
}
