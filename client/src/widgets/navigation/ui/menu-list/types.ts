import { TIconType } from 'shared/ui/icon'

export interface IMenuItem {
  title: string
  icon: TIconType
  onClick?: VoidFunction
  path?: string
}
