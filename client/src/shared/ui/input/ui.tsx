'use client'

import { TInputVariant } from '.'
import clsx from 'clsx'
import {
  ComponentProps,
  PropsWithChildren,
  forwardRef,
  useEffect,
  useMemo,
  useState,
} from 'react'

import { useInputContext } from './lib/use-input-context'
import { IInputContext, InputContext } from './model'
import styles from './style.module.scss'

export const Input = ({ children }: PropsWithChildren) => {
  const [inputId, setInputId] = useState<string | undefined>()
  const [hasLeftElement, setHasLeftElement] = useState(false)
  const [hasRightElement, setHasRightElement] = useState(false)

  const value = useMemo<IInputContext>(
    () => ({
      inputId,
      hasLeftElement,
      hasRightElement,
      setInputId,
      setHasLeftElement,
      setHasRightElement,
    }),
    [inputId, hasLeftElement, hasRightElement]
  )

  return (
    <div>
      <InputContext.Provider value={value}>{children}</InputContext.Provider>
    </div>
  )
}

Input.Label = ({
  children,
  htmlFor,
  className,
  ...restProps
}: ComponentProps<'label'>) => {
  const { inputId } = useInputContext()

  return (
    <label
      className={clsx(styles.label, className)}
      htmlFor={inputId ?? htmlFor}
      {...restProps}
    >
      {children}
    </label>
  )
}

Input.FieldContainer = forwardRef<
  HTMLDivElement,
  { className?: string } & PropsWithChildren
>(({ children, className }, ref) => {
  return (
    <div ref={ref} className={clsx(styles['input-container'], className)}>
      {children}
    </div>
  )
})

interface IElementProps extends PropsWithChildren {
  className?: string
}

Input.LeftElement = ({ children, className }: IElementProps) => {
  const { setHasLeftElement } = useInputContext()

  useEffect(() => {
    setHasLeftElement(true)

    return () => setHasLeftElement(false)
  }, [])

  return (
    <div className={clsx(styles['element-left'], className)}>{children}</div>
  )
}

Input.RightElement = ({ children, className }: IElementProps) => {
  const { setHasRightElement } = useInputContext()

  useEffect(() => {
    setHasRightElement(true)

    return () => setHasRightElement(false)
  }, [])

  return (
    <div className={clsx(styles['element-right'], className)}>{children}</div>
  )
}

interface IInputProps extends ComponentProps<'input'> {
  variant?: TInputVariant
}

Input.Field = forwardRef<HTMLInputElement, IInputProps>(
  ({ variant = 'standard', className, id, ...restProps }, ref) => {
    const { hasLeftElement, hasRightElement, setInputId } = useInputContext()

    useEffect(() => {
      setInputId(id)
    }, [id])

    return (
      <input
        ref={ref}
        id={id}
        className={clsx(
          styles[`input-${variant}`],
          hasLeftElement && styles['input-has-left-element'],
          hasRightElement && styles['input-has-right-element'],
          className
        )}
        {...restProps}
      />
    )
  }
)

Input.ErrorMessage = ({ message }: { message?: string }) => {
  if (!message) {
    return null
  }

  return <div className={styles['error-message']}>{message}</div>
}
