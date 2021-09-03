import ModalPage from 'components/modal/ModalPage'
import React from 'react'
import * as S from './layout.styled'
import { useSelector } from 'react-redux'
import { RootState } from 'store/configStore'

interface ILayoutProps {
  children?: React.ReactNode
}

const Layout = ({ children }: ILayoutProps) => {
  const { showModal } = useSelector((state: RootState) => state.modal)
  return (
    <S.LayoutWrap>
      {children}
      {showModal && <ModalPage />}
    </S.LayoutWrap>
  )
}

export default Layout
