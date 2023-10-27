import { commonInstance } from '../config'

import { IFileResponse } from './types'

export const files = {
  uploadFile(file: FormData, folder?: string) {
    return commonInstance.post<[IFileResponse]>('/files', file, {
      params: {
        folder,
      },
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
  },
}
