import clsx from 'clsx'
import { PropsWithChildren, useState } from 'react'
import { createPortal } from 'react-dom'
import { useKeyPress } from 'shared/lib/use-key-press'
import { useOutsideClick } from 'shared/lib/use-outside-click'

import { useAutoFocus } from './lib/use-auto-focus'
import { usePopover } from './lib/use-popover'
import styles from './style.module.scss'
import { TAlignment } from './types'

interface IProps extends PropsWithChildren {
  open: boolean
  onClose: VoidFunction
  anchorElement: HTMLElement
  alignment?: TAlignment
  triggerElement: HTMLElement | null
  offset?: number
  modal?: boolean
  portalled?: boolean
  autoFocus?: boolean
  closeOnEsc?: boolean
  className?: string
}

export const Popover = ({
  open,
  onClose,
  anchorElement,
  alignment = 'bottomCenter',
  triggerElement,
  offset = 10,
  modal = false,
  portalled = false,
  autoFocus = true,
  closeOnEsc = true,
  className,
  children,
}: IProps) => {
  const [popoverElement, setPopoverElement] = useState<HTMLDivElement | null>(
    null
  )

  useAutoFocus({
    focus: open && autoFocus,
    popoverElement,
  })

  useKeyPress('Escape', onClose, closeOnEsc)

  useOutsideClick(
    [{ current: triggerElement }, { current: popoverElement }],
    onClose
  )

  const { popoverProps } = usePopover({
    open,
    offset,
    alignment,
    anchorElement,
    popoverElement: popoverElement,
  })

  if (!open) {
    return null
  }

  return portalled ? (
    createPortal(
      <div
        ref={setPopoverElement}
        className={clsx(styles.root, className)}
        {...popoverProps}
      >
        {children}
      </div>,
      document.body
    )
  ) : (
    <div
      ref={setPopoverElement}
      className={clsx(styles.root, className)}
      {...popoverProps}
    >
      {children}
    </div>
  )
}
