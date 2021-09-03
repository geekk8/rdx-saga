import { IPhotoState, photoActions } from 'features/photoSlice/photoSlice'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'store/configStore'
import styled from 'styled-components'

const MainPage: React.FC = () => {
  const dispatch = useDispatch()
  const { photoList } = useSelector((state: RootState) => state.photo)
  const [fetchCount, setFetchCount] = useState<number>(20)

  useEffect(() => {
    dispatch({ type: photoActions.requestPhoto })
  }, [])

  return (
    <div>
      <ImgWrap>
        {photoList.slice(0, fetchCount).map((data: IPhotoState) => {
          return <Img key={data.id} src={data.thumbnailUrl} alt={data.title} />
        })}
      </ImgWrap>
    </div>
  )
}

export default MainPage

const ImgWrap = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: 20px;
  padding: 10px;
`

const Img = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 5px;
  margin-right: 10px;
`
