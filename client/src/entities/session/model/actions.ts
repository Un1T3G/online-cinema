import { createAsyncThunk } from '@reduxjs/toolkit'
import Cookies from 'js-cookie'
import { IAuthDto, IAuthResponse, commonApi } from 'shared/api'
import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from 'shared/constants/keys'
import { errorCatch } from 'shared/lib/api'

export const register = createAsyncThunk<IAuthResponse, IAuthDto>(
  'auth/register',
  async (dto, thunkAPI) => {
    try {
      const response = await commonApi.auth.register(dto)

      Cookies.set(ACCESS_TOKEN_KEY, response.data.accessToken)
      Cookies.set(REFRESH_TOKEN_KEY, response.data.refreshToken)

      return response.data
    } catch (error: any) {
      if (!error.response) {
        throw error
      }

      return thunkAPI.rejectWithValue(error)
    }
  }
)

export const login = createAsyncThunk<IAuthResponse, IAuthDto>(
  'auth/login',
  async (dto, thunkAPI) => {
    try {
      const response = await commonApi.auth.login(dto)

      Cookies.set(ACCESS_TOKEN_KEY, response.data.accessToken)
      Cookies.set(REFRESH_TOKEN_KEY, response.data.refreshToken)

      return response.data
    } catch (error: any) {
      if (!error.response) {
        throw error
      }

      return thunkAPI.rejectWithValue(errorCatch(error))
    }
  }
)

export const logout = createAsyncThunk('auth/logout', async () => {
  localStorage.clear()
  Cookies.remove(ACCESS_TOKEN_KEY)
  Cookies.remove(REFRESH_TOKEN_KEY)
})

export const checkAuth = createAsyncThunk<IAuthResponse>(
  'auth/check-auth',
  async (_, thunkAPI) => {
    try {
      const refreshToken = Cookies.get(REFRESH_TOKEN_KEY) ?? ''
      const response = await commonApi.auth.refreshToken(refreshToken)

      return response.data
    } catch (error: any) {
      if (!error.response) {
        throw error
      }

      return thunkAPI.rejectWithValue(errorCatch(error))
    }
  }
)
