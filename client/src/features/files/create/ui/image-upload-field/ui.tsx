import { ImageUpload } from 'shared/ui/upload'

import { useImageUploadField } from './lib/use-image-upload-field'

type ImageUploadProps = Parameters<typeof ImageUpload>[0]

interface IProps extends ImageUploadProps {
  folder?: string
}

export const ImageUploadField = ({
  label,
  error,
  image,
  folder,
  onChange,
  className,
}: IProps) => {
  const { isLoading, uploadImage } = useImageUploadField(onChange, folder)

  return (
    <ImageUpload
      label={label}
      error={error}
      image={image}
      onChange={uploadImage}
      isLoading={isLoading}
      className={className}
    />
  )
}
