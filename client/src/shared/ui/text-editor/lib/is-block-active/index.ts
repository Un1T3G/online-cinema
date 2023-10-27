import { Editor } from 'slate'

export const isBlockActive = (editor: Editor, format: string) => {
  const [match] = Editor.nodes(editor, {
    match: (n: any) => n.type === format
  });

  editor.isBlock('\')

  return !!match;
}
