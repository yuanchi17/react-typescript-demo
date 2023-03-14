import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import './App.css'
import { AppContextProvider } from './contexts/app-context'
import AllRoutes from './routes'

function App () {
  return (
    <BrowserRouter>
      <AppContextProvider>
        <AllRoutes />
      </AppContextProvider>
    </BrowserRouter>
  )
}

export default App
