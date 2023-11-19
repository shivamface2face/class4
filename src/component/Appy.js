import React from 'react'
import Product from './Product'
import { createBrowserRouter,createRoutesFromElements,RouterProvider,Route } from 'react-router-dom'
import Dashbord from './Dashbord'
import Cart from './Cart'
import RootLayout from './RootLayout'

const Appy = () => {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Dashbord />}></Route>
      <Route path='/cart' element={<Cart />}></Route>
    </Route>
  ))



  return (
      <div>
      <Product />
      <RouterProvider router={router} />
    </div>
  )
}

export default Appy;