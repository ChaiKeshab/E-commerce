import { Routes, Route } from 'react-router-dom'
import { Home, CategorizedProducts, ProductDetails } from './pages/index'
import { TopNavbar, Sidebar } from './layouts/index'

const App = () => {
  return (
    <>
      <Sidebar />
      <Routes>
        <Route element={<TopNavbar />}>
          <Route exact path='/' element={<Home />} />

          <Route exact path={'/products'}>
            {/* <Route index element={<Products />} /> */}
            <Route exact path={':id'} element={<ProductDetails />} />
            <Route exact path={'category/:id'} element={<CategorizedProducts />} />
          </Route>
        </Route>

      </Routes>
    </>
  )
}

export default App