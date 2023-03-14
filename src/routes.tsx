import React from 'react'
import { useRoutes } from 'react-router-dom'
import Home from './pages/Home'
import Longboard from './pages/Longboard'

const AllRoutes = () => {
  const routes = useRoutes([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/longboard',
      element: <Longboard />
    }
  ])
  return routes
}

export default AllRoutes
