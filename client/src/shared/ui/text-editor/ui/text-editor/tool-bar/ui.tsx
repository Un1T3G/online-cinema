import { Editor } from '@tiptap/react'

import { Button } from './button'
import styles from './style.module.scss'

interface IProps {
  editor: Editor | null
}

export const ToolBar = ({ editor }: IProps) => {
  return (
    <div className={styles.root}>
      <Button
        onClick={() => editor?.chain().toggleBold().run()}
        icon="MdFormatBold"
        isActive={editor?.isActive('bold')}
      />
      <Button
        onClick={() => editor?.chain().toggleItalic().run()}
        icon="MdFormatItalic"
        isActive={editor?.isActive('italic')}
      />
      <Button
        onClick={() => editor?.chain().toggleStrike().run()}
        icon="MdFormatStrikethrough"
        isActive={editor?.isActive('strike')}
      />
      <Button
        onClick={() => editor?.chain().toggleBulletList().run()}
        icon="MdFormatListBulleted"
        isActive={editor?.isActive('bulletList')}
      />
      <Button
        onClick={() => editor?.chain().toggleOrderedList().run()}
        icon="MdFormatListNumberedRtl"
        isActive={editor?.isActive('orderedList')}
      />
    </div>
  )
}
