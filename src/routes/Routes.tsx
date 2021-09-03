// import AlbumPage from 'domain/album'
import AlbumPage from 'domain/album/AlbumPage'
import Layout from 'layout/Layout'
import { Suspense, lazy } from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'

// code splitting
const PhotoPage = lazy(() => import('domain/photo'))
const MainPage = lazy(() => import('domain/main'))
const NotFound = lazy(() => import('domain/notFound/NotFound'))
const PhonePhoto = lazy(() => import('domain/phonePhoto'))

const Routes = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Suspense fallback={null}>
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/photo" component={PhotoPage} />
            <Route exact path="/album" component={AlbumPage} />
            <Route exact path="/phonePhoto" component={PhonePhoto} />
            <Route exact path="/NotFound" component={NotFound} />
            <Redirect to={'/NotFound'} />
          </Switch>
        </Suspense>
      </Layout>
    </BrowserRouter>
  )
}

export default Routes
