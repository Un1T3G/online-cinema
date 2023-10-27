import compose from 'compose-function'

import { withAuth } from './with-auth'
import { withReactQuery } from './with-react-query'
import { withRedux } from './with-redux'
import { withSeo } from './with-seo'

export const withProviders = compose(
  withReactQuery,
  withRedux,
  withSeo,
  withAuth
)
