import { Button } from '..'
import { TButtonVariant } from '../../types'
import { ComponentProps, PropsWithChildren, useRef } from 'react'
import { useEvent } from 'shared/lib/use-event'

import { getAcceptType } from './lib/get-accept-type'
import { TFileType } from './types'

interface IProps extends PropsWithChildren {
  type?: TFileType
  variant?: TButtonVariant
  className?: string
}

export const UploadButton = ({
  type = 'any',
  variant,
  className,
  children,
  onChange,
}: IProps & Pick<ComponentProps<'input'>, 'onChange'>) => {
  const ref = useRef<HTMLInputElement>(null)

  const handleOnClick = useEvent(() => {
    ref.current?.click()
  })

  return (
    <Button
      type="button"
      className={className}
      variant={variant}
      onClick={handleOnClick}
    >
      {children}
      <input
        ref={ref}
        type="file"
        className="hidden"
        accept={getAcceptType(type)}
        onChange={onChange}
      />
    </Button>
  )
}
