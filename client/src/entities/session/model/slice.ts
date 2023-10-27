import { createSlice } from '@reduxjs/toolkit'
import { IUser } from 'shared/api'

import { checkAuth, login, logout, register } from './actions'

interface IState {
  user: IUser | undefined
  isLoading: boolean
}

const initialState: IState = {
  user: undefined,
  isLoading: false,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true
      })
      .addCase(register.fulfilled, (state, { payload }) => {
        state.isLoading = false
        state.user = payload.user
      })
      .addCase(register.rejected, (state) => {
        state.isLoading = false
        state.user = undefined
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        state.isLoading = false
        state.user = payload.user
      })
      .addCase(login.rejected, (state) => {
        state.isLoading = false
        state.user = undefined
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = undefined
      })
      .addCase(checkAuth.pending, (state) => {
        state.isLoading = true
      })
      .addCase(checkAuth.fulfilled, (state, { payload }) => {
        state.user = payload.user
        state.isLoading = false
      })
  },
})

export const { reducer } = userSlice
