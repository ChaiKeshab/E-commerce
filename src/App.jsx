import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/index'
import ProductDetails from './pages/ProductDetails'

const App = () => {
  return (
    <>
      <Routes>

        <Route exact path='/'>
          <Route index element={<Home />} />
          <Route exact path={':id'} element={<ProductDetails />} />
        </Route>

      </Routes>
    </>
  )
}

export default App