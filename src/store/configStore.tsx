import { combineReducers } from 'redux'
import createSagaMiddleware from '@redux-saga/core'
import { configureStore } from '@reduxjs/toolkit'
import photoSlice from 'features/photoSlice/photoSlice'
import rootSaga from './rootSaga'
import albumSlice from 'features/ablumsSlice/albumSlice'
import modalSlice from 'features/modalSlice/modalSlice'

const sagaMiddleWare = createSagaMiddleware()
const reducers = combineReducers({
  photo: photoSlice.reducer,
  album: albumSlice.reducer,
  modal: modalSlice.reducer,
})

const createStore = () => {
  const store = configureStore({
    reducer: reducers,
    middleware: [sagaMiddleWare],
  })
  sagaMiddleWare.run(rootSaga)

  return store
}

export type RootState = ReturnType<typeof reducers>

export default createStore
