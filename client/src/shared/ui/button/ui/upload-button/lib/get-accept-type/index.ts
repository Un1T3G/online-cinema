import { TFileType } from '../../types'

export const getAcceptType = (type: TFileType) => {
  const types: Record<TFileType, string> = {
    any: '',
    image: 'image/*',
    video: 'video/*',
  }

  return types[type]
}
