import { createSlice } from '@reduxjs/toolkit'

const name = '@count'

const initialState = {
  number: 0,
}

const reducers = {
  increase: (state: any) => {
    state.number = state.number + 1
  },
  decrease: (state: any) => {
    state.number = state.number - 1
  },
}

const countSlice = createSlice({
  name,
  initialState,
  reducers,
})

export const { increase, decrease } = countSlice.actions

export default countSlice
