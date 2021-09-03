import { createSlice } from '@reduxjs/toolkit'

interface IModalState {
  showModal: boolean
}

const initialState = {
  showModal: false,
}

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setOpenModal: (state: IModalState) => {
      state.showModal = true
    },
    setCloseModal: (state: IModalState) => {
      state.showModal = false
    },
  },
})

export const { setOpenModal, setCloseModal } = modalSlice.actions

export default modalSlice
