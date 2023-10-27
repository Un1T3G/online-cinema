'use client'

import Placeholder from '@tiptap/extension-placeholder'
import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import clsx from 'clsx'
import { useEffect } from 'react'
import { useDebounce } from 'shared/lib/use-debounce'
import { useEvent } from 'shared/lib/use-event'

import styles from './style.module.scss'
import { ToolBar } from './tool-bar'

interface IProps {
  onChange: (...event: any[]) => void
  value: string
  error?: string
  className?: string
  placeholder: string
}

export const TextEditor = ({
  onChange,
  value,
  placeholder,
  error,
  className,
}: IProps) => {
  const handleOnUpdate = useEvent((props: any) => {
    onChange(props.editor.getHTML())
  })

  const editor = useEditor({
    extensions: [StarterKit, Placeholder.configure({ placeholder })],
    content: value,
    onUpdate: handleOnUpdate,
    autofocus: 'end',
    enableCoreExtensions: true,
  })

  const debouncedValue = useDebounce(value)

  useEffect(() => {
    editor?.commands.setContent(debouncedValue)
  }, [editor, debouncedValue])

  return (
    <div className={clsx(styles.root, className)}>
      <ToolBar editor={editor} />
      <EditorContent editor={editor} className={styles['input']} />
      {error && <span className={styles.error}>{error}</span>}
    </div>
  )
}
