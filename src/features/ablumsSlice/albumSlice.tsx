import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import API from 'api'
import { AxiosError } from 'axios'
import { createAsyncSaga } from 'utils/sagaUitl'

export interface IAlbumListState {
  userId: number
  id: number
  title: string
}

export interface IAlbumsState {
  albumsList: IAlbumListState[]
  error: AxiosError | Error | null
  selectAlbum: IAlbumListState | null
}

const initialState: IAlbumsState = {
  albumsList: [],
  error: null,
  selectAlbum: null,
}

const name = 'album'

export const albumsActions = {
  requestAlbum: `${name}/requestAlbum`,
  requestAlbumSelect: `${name}/requestAlbumSelect`,
}

const fetchAlbums = async () => {
  const albums: IAlbumListState[] = await API({
    method: 'get',
    url: `https://jsonplaceholder.typicode.com/albums`,
  }).then((res) => res.data)
  return albums
}

const selectAlbumData = async (id: number) => {
  const selectDatas: IAlbumListState | any = await API({
    method: 'get',
    url: `https://jsonplaceholder.typicode.com/albums/${id}`,
  }).then((res) => res.data)
  return selectDatas
}

const reducers = {
  fetchListSuccess: (
    state: IAlbumsState,
    action: PayloadAction<IAlbumListState[]>,
  ) => {
    state.albumsList = action.payload
    state.error
  },
  fetchListfailure: (
    state: IAlbumsState,
    action: PayloadAction<AxiosError>,
  ) => {
    state.albumsList, (state.error = action.payload)
  },
  fetchSelectAlbumDataSuccess: (
    state: IAlbumsState,
    action: PayloadAction<IAlbumListState>,
  ) => {
    state.selectAlbum = action.payload
  },
  fetchSelectAlbumDataFailure: (
    state: IAlbumsState,
    action: PayloadAction<IAlbumListState>,
  ) => {
    state.selectAlbum = action.payload
  },
}

const albumSlice = createSlice({
  name,
  initialState,
  reducers,
})

export const {
  fetchListSuccess,
  fetchListfailure,
  fetchSelectAlbumDataSuccess,
  fetchSelectAlbumDataFailure,
} = albumSlice.actions
export const albumSaga = createAsyncSaga(
  [fetchListSuccess, fetchListfailure],
  fetchAlbums,
  false,
)

export const selectAlbumSaga = createAsyncSaga(
  [fetchSelectAlbumDataSuccess, fetchSelectAlbumDataFailure],
  selectAlbumData,
  false,
)

export default albumSlice
