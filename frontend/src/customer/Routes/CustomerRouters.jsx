import React from 'react'
import HomePage from '../Pages/HomePage/HomePage'
import { Route,Routes } from 'react-router-dom'
import Cart from '../Cart/Cart'
import Navigation from '../Navigation/Navigation'
import Footer from '../Footer/Footer'
import Product from '../Product/Product'
import ProductDetails from '../ProductDetails/ProductDetails'
import CheckOut from '../CheckOut/CheckOut'
import Order from '../Order/Order'
import OrderDetails from '../Order/OrderDetails'

const CustomerRoutes = () => {
  return (
    <div>
      <div>
        <Navigation/>
      </div>
      <Routes>
        <Route path="/login" element={<HomePage />} />
        <Route path="/register" element={<HomePage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/:lavelOne/:lavelTwo/:lavelThree" element={<Product />} />
        <Route path="/product/:productId" element={<ProductDetails />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/account/order" element={<Order />} />
        <Route path="/account/order/:orderId" element={<OrderDetails />} />
      </Routes>
      <div>
        <Footer/>
      </div>
    </div>
  )
}

export default CustomerRoutes
