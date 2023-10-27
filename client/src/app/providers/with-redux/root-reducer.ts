import { combineReducers } from '@reduxjs/toolkit'
import { reducer as userReducer } from 'entities/session'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer = combineReducers({
  user: userReducer,
})

export const reducers = persistReducer(persistConfig, rootReducer)
