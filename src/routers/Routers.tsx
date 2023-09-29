import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from '../layout/Layout'
import Login from '../pages/auth/Login/Login'
import Register from '../pages/auth/Register/Register'
import Blog from '../pages/Blog/Blog'
import Home from '../pages/Home/Home'
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage'
import OurStory from '../pages/OurStory/OurStory'
import Shop from '../pages/Shop/Shop'

function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/ourstory' element={<OurStory />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='*' element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Routers