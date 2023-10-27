import { TNextPageAuth } from 'shared/types'

const Error404Page: TNextPageAuth = () => {
  return (
    <div className="pt-52">
      <h1 className="text-bold text-2xl text-center">
        <strong>404</strong> | This page could not found
      </h1>
    </div>
  )
}

export default Error404Page
