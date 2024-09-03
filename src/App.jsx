
import { Route , Routes  } from "react-router-dom"
import NavBar from "./layouts/NavBar"
import HomePage from "./pages/home/homePage"
import CartPage from "./pages/cart/cartPage"
import ProductDetails from "./pages/details/productDetails"
function App() {
    return (
      <Routes>
          <Route path="/" element={<NavBar /> }>
          <Route index element={<HomePage />} />          
          <Route path="/cart" element={<CartPage/>} />          
          <Route path="products/:id" element={<ProductDetails/>} />          
          </Route>
    </Routes>
  )
}

export default App
