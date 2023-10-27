import { TIconType } from '.'
import * as MaterialIcons from 'react-icons/md'

interface IProps {
  type: TIconType
  wrapWithDiv?: boolean
  className?: string
}

export const Icon = ({ type, wrapWithDiv, className }: IProps) => {
  const IconComponent = MaterialIcons[type]

  if (wrapWithDiv && wrapWithDiv === true) {
    return (
      <div className={className}>
        <IconComponent />
      </div>
    )
  }

  return <IconComponent className={className} />
}
