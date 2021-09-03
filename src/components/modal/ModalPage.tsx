import { setCloseModal } from 'features/modalSlice/modalSlice'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'store/configStore'
import styled from 'styled-components'

const ModalPage = () => {
  const dispatch = useDispatch()

  const handleCloseModal = () => {
    dispatch(setCloseModal())
  }

  return (
    <>
      <SModal onClick={handleCloseModal} />
      <SModalWrap>
        <button onClick={handleCloseModal}>close modal</button>
      </SModalWrap>
    </>
  )
}

export default ModalPage

const SModal = styled.div`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.5);
  height: 100vh;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 0;
`

const SModalWrap = styled.div`
  width: 100%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  height: 60%;
  background-color: #fff;
  position: absolute;
  z-index: 111111;
`
