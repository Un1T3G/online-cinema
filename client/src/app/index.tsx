import { AppProps } from 'next/app'
import NextNProgress from 'nextjs-progressbar'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { TTypeRoles } from 'shared/types'
import { Layout } from 'widgets/layout/ui'

import { withProviders } from './providers'

const App = ({
  Component,
  pageProps,
}: AppProps & { Component: TTypeRoles }) => {
  return (
    <>
      <NextNProgress
        color="#ef4444"
        height={3}
        options={{ showSpinner: false }}
      />
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <ToastContainer autoClose={5000} />
    </>
  )
}

export default withProviders(App)
