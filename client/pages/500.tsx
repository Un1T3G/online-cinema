import { TNextPageAuth } from 'shared/types'

const Error500Page: TNextPageAuth = () => {
  return (
    <div className="pt-52">
      <h1 className="text-bold text-2xl">500 | Server internal error</h1>
    </div>
  )
}

export default Error500Page
