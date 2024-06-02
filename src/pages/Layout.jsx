import React, { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import { DarkmodeContext } from '../DarkmodeContext/DarkmodeContext'


function Layout() {
  let {theme  } = useContext(DarkmodeContext)
  return (
    <main className={theme}>
      <Outlet/>
    </main>
  )
}

export default Layout
