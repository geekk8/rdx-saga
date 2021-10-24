import { createSlice } from '@reduxjs/toolkit'

interface ITestSlice {
  isTest: boolean
}

const testSlice = createSlice({
  name: '@test',
  initialState: {
    isTest: false,
  },
  reducers: {
    setTestTrue: (state: ITestSlice) => {
      state.isTest = true
    },
    setTestFalse: (state: ITestSlice) => {
      state.isTest = false
    },
  },
})

export const { setTestTrue, setTestFalse } = testSlice.actions

export default testSlice
