import { MenuList } from '../menu-list'

import { useGeneralList } from './lib/use-general-list'

export const GeneralList = () => {
  const items = useGeneralList()

  return <MenuList title="General" items={items} />
}
