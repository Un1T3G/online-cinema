import { TextEditor } from '../text-editor'

import styles from './style.module.scss'

type TextEditorProps = Parameters<typeof TextEditor>[0]

interface IProps extends TextEditorProps {
  label: string
}

export const TextEditorWithLabel = ({ label, ...restProps }: IProps) => {
  return (
    <>
      <span className={styles.root}>{label}</span>
      <TextEditor {...restProps} />
    </>
  )
}
