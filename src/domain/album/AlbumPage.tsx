import { albumsActions, IAlbumListState } from 'features/ablumsSlice/albumSlice'
import { setOpenModal } from 'features/modalSlice/modalSlice'
import withAuth from 'hoc/withAuth'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'store/configStore'

interface IAlbumPageProp {
  admin?: string
}
const AlbumPage = ({ admin }: IAlbumPageProp) => {
  const [show, setShow] = useState<boolean>(false)
  const dispatch = useDispatch()
  const { showModal } = useSelector((state: RootState) => state.modal)
  const { albumsList, selectAlbum } = useSelector(
    (state: RootState) => state.album,
  )

  const handleFetch = () => {
    dispatch({ type: albumsActions.requestAlbum })
    setShow(false)
  }

  const handleSelect = (id: number) => {
    setShow(true)
    dispatch({ type: albumsActions.requestAlbumSelect, payload: id })
  }

  const handleOpenModal = () => {
    dispatch(setOpenModal())
  }

  return (
    <div>
      <button onClick={handleFetch}>click fetch!</button>
      {!show ? (
        <ul>
          {albumsList?.map((data: IAlbumListState) => {
            return (
              <li key={data.id} onClick={() => handleSelect(data.id)}>
                {data.title}
              </li>
            )
          })}
        </ul>
      ) : (
        <div>
          {selectAlbum &&
            Object.keys(selectAlbum).map((data, idx) => {
              return <p key={idx}>{`${data} : ${selectAlbum[data]}`}</p>
            })}
        </div>
      )}
      <button onClick={handleOpenModal}>open modal</button>
      <h3>{admin}</h3>
      {/* {showModal && <ModalPage />} */}
    </div>
  )
}

export default withAuth(true)(AlbumPage)
