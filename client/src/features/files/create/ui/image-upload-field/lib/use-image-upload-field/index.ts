import { useFileUpload } from 'features/files/create'
import { ChangeEvent, useState } from 'react'
import { errorCatch } from 'shared/lib/api'
import { toastMe } from 'shared/lib/toastify'
import { useEvent } from 'shared/lib/use-event'

export const useImageUploadField = (
  onChange: (...event: any[]) => void,
  folder?: string
) => {
  const [isLoading, setIsLoading] = useState(false)

  const { mutateAsync } = useFileUpload({
    onSuccess({ data }) {
      onChange(data[0].url)
    },
    onError(error) {
      toastMe.error(errorCatch(error))
    },
  })

  const uploadImage = useEvent(async (e: ChangeEvent<HTMLInputElement>) => {
    setIsLoading(true)

    const files = e.target.files

    if (files?.length) {
      const formData = new FormData()
      formData.append('image', files[0])

      await mutateAsync({ file: formData, folder })

      setTimeout(() => {
        setIsLoading(false)
      }, 1000)
    }
  })

  return {
    isLoading,
    uploadImage,
  }
}
