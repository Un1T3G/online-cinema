import { VideoUpload } from 'shared/ui/upload'

import { useVideoUploadField } from './lib/use-video-upload-field'

type VideoUploadProps = Parameters<typeof VideoUpload>[0]

interface IProps extends VideoUploadProps {
  folder?: string
}

export const VideoUploadField = ({
  label,
  error,
  onChange,
  folder,
}: IProps) => {
  const { uploadVideo } = useVideoUploadField(onChange, folder)

  return <VideoUpload label={label} error={error} onChange={uploadVideo} />
}
