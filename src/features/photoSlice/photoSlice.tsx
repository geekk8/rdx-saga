import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AxiosError } from 'axios'

export interface IPhotoState {
  albumId: number
  id: number
  title: string
  url: string
  thumbnailUrl: string
}

export interface IPhotoInitialState {
  photoList: IPhotoState[]
  error: AxiosError | Error | null
  loading: boolean
}

const initialState = {
  photoList: [],
  error: null,
  loading: false,
} as IPhotoInitialState

export const photoActions = {
  requestPhoto: 'photo/requestPhoto',
}

const photoSlice = createSlice({
  name: 'photo',
  initialState,
  reducers: {
    requestPhotoList: (state) => {
      state.loading = true
    },
    requestPhotoListSuccess: (
      state: IPhotoInitialState,
      action: PayloadAction<IPhotoState[]>,
    ) => {
      state.loading = false
      state.photoList = action.payload
    },
    requestPhotoListFailure: (state: IPhotoInitialState, action: any) => {
      state.loading = false
      state.error = action.payload
    },
  },
})

export const {
  requestPhotoList,
  requestPhotoListSuccess,
  requestPhotoListFailure,
} = photoSlice.actions

export default photoSlice
