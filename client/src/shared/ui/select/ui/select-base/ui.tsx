import { useSelection } from '../../lib/use-selection'
import { ISelectOption } from '../../types'
import clsx from 'clsx'
import { ReactNode, useRef, useState } from 'react'
import { useEvent } from 'shared/lib/use-event'
import { useOutsideClick } from 'shared/lib/use-outside-click'
import { Icon } from 'shared/ui/icon'
import { Popover } from 'shared/ui/popover'
import { Spinner } from 'shared/ui/spinner/'

import styles from './style.module.scss'

interface IRenderSelectedLabelProps<T> {
  values: ISelectOption<T>[]
  removeSelection: any
}

interface IRenderSelectionListProps<T> {
  isSelected: any
  toggleSelection: any
  options: ISelectOption<T>[]
  close: VoidFunction
}

interface IProps<T> {
  placeholder: string
  error?: string
  isLoading?: boolean
  className?: string
  isComboSelect?: boolean
  values: ISelectOption<T>[]
  options: ISelectOption<T>[]
  onChange: (values: ISelectOption<T>[]) => void
  renderSelectedLabel: (props: IRenderSelectedLabelProps<T>) => ReactNode
  renderSelectionList: (props: IRenderSelectionListProps<T>) => ReactNode
}

export const SelectBase = <T,>({
  placeholder,
  error,
  isLoading = false,
  className,
  values,
  isComboSelect,
  options,
  onChange,
  renderSelectedLabel,
  renderSelectionList,
}: IProps<T>) => {
  const ref = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)

  const [open, setOpen] = useState(false)

  const { isSelected, toggleSelection, removeSelection, clearSelection } =
    useSelection({
      values,
      onChange,
      isComboSelect,
    })

  const toggleOpen = useEvent(() => {
    if (isLoading) {
      return
    }

    setOpen((prev) => !prev)
  })

  const close = useEvent(() => {
    setOpen(false)
  })

  const hasSelectedOptions = values.length > 0

  return (
    <>
      <div ref={ref} className={clsx(styles.root, className)}>
        <div>
          {error ? (
            <span className={styles.error}>{error}</span>
          ) : hasSelectedOptions ? (
            renderSelectedLabel({ values, removeSelection })
          ) : (
            <span className={styles.label}>{placeholder}</span>
          )}
          {hasSelectedOptions && (
            <button
              type="button"
              onClick={clearSelection}
              className={styles['clear-button']}
            >
              <Icon type="MdClose" />
            </button>
          )}
        </div>
        <button
          ref={triggerRef}
          onClick={toggleOpen}
          className={styles['toggle-button']}
          type="button"
        >
          {isLoading ? (
            <Spinner />
          ) : (
            <Icon
              type={open ? 'MdArrowUpward' : 'MdArrowDownward'}
              wrapWithDiv
            />
          )}
        </button>
      </div>
      <Popover
        anchorElement={ref.current!}
        open={open}
        onClose={close}
        offset={20}
        portalled={true}
        className={styles['list-root']}
        alignment="bottomLeft"
        triggerElement={triggerRef.current}
      >
        {renderSelectionList({ isSelected, toggleSelection, options, close })}
      </Popover>
    </>
  )
}
