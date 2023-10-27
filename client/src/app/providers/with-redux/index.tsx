import { ComponentType } from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import { persistor, store } from './store'

export const withRedux =
  <T extends object>(Component: ComponentType<T>) =>
  (props: T) => {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Component {...props} />
        </PersistGate>
      </Provider>
    )
  }
