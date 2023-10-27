type TThunkType = 'rejected' | 'pending' | 'fulfilled'

export const getThunkType = (type: string): TThunkType => {
  return type.split('/').at(-1) as TThunkType
}
