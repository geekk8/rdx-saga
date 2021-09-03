import './App.css'
import { useEffect, useState } from 'react'
import Routes from 'routes/Routes'
import { Provider, useSelector } from 'react-redux'
import createStore, { RootState } from 'store/configStore'
import { countDown } from 'utils/common'
import ModalPage from 'components/modal/ModalPage'

const store = createStore()

function App() {
  const [time, setTime] = useState<number>(120)
  const { showModal } = useSelector((state: RootState) => state.modal)

  // useEffect(() => {
  //   if (time > 0) {
  //     const counter = setInterval(() => {
  //       // const gap = Math.floor(min - date.getTime()) / 1000
  //       setTime((gap) => gap - 1)
  //     }, 1000)
  //     return () => clearInterval(counter)
  //   }
  // }, [setTime, time])

  return (
    <Provider store={store}>
      <div className="App">
        <Routes />
        {/* <p>{countDown(time)}</p> */}
      </div>
    </Provider>
  )
}

export default App
