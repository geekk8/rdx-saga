import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const name = '@git'

interface IGitState {
  gitInfo: any
}

const initialState: IGitState = {
  gitInfo: {},
}

const reducers = {
  setGitInfo: (state: IGitState, action: PayloadAction<any>) => {
    state.gitInfo = action.payload
  },
}

const gitSlice = createSlice({
  name,
  initialState,
  reducers,
})

export const { setGitInfo } = gitSlice.actions

export default gitSlice
