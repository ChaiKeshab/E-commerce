import { Routes, Route } from 'react-router-dom'
import { Home, CategorizedProducts, ProductDetails, Cart } from './pages/index'
import { TopNavbar, CartSidebar, CategorySidebar } from './layouts/index'

const App = () => {
  return (
    <>
      <CartSidebar />
      <CategorySidebar />
      <TopNavbar />

      <div className='mt-24'>

        <Routes>
          <Route exact path='/' element={<Home />} />

          <Route exact path={'/products'}>
            <Route exact path={':id'} element={<ProductDetails />} />
            <Route exact path={'category/:id'} element={<CategorizedProducts />} />
          </Route>

          <Route exact path='/cart' element={<Cart />} />

        </Routes>
      </div>
    </>
  )
}

//<Route index element={<Products />} />

export default App