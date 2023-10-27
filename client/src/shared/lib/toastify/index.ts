import { MdDone, MdError } from 'react-icons/md'
import { toast } from 'react-toastify'

export const toastMe = {
  error: (message: string) => {
    toast.error(message, { icon: MdError })
  },

  success: (message: string) => {
    toast.success(message, { icon: MdDone })
  },
}
