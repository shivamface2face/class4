import React from 'react'
import { Outlet } from 'react-router-dom'

import Navbarr from './Navbarr'
const RootLayout = () => {
  return (
      <div>
          <h2>Navigation</h2>
        <Navbarr />
          <main>
              <Outlet />
          </main>
    </div>
  )
}

export default RootLayout