import { AxiosResponse } from 'axios'
import { UseMutationOptions, useMutation } from 'react-query'
import { IFileResponse, commonApi } from 'shared/api'

interface IProps {
  file: FormData
  folder?: string
}

export const useFileUpload = (
  options?: Omit<
    UseMutationOptions<AxiosResponse<[IFileResponse], any>, unknown, IProps>,
    'mutationKey' | 'mutationFn'
  >
) => {
  return useMutation(
    ['upload file'],
    ({ file, folder }: IProps) => commonApi.files.uploadFile(file, folder),
    options
  )
}
