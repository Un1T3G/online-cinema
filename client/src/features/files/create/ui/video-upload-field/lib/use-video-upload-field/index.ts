import { useFileUpload } from 'features/files/create'
import { ChangeEvent } from 'react'
import { toastMe } from 'shared/lib/toastify'
import { useEvent } from 'shared/lib/use-event'

export const useVideoUploadField = (
  onChange: (...event: any[]) => void,
  folder?: string
) => {
  const { mutate } = useFileUpload({
    onSuccess({ data }) {
      onChange(data[0].url)
    },
    onError(error) {
      toastMe.error(error as string)
    },
  })

  const uploadVideo = useEvent(async (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files

    if (files?.length) {
      const formData = new FormData()
      formData.append('video', files[0])
      mutate({ file: formData, folder })
    }
  })

  return {
    uploadVideo,
  }
}
