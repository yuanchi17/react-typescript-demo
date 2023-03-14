import React, { useContext } from 'react'
import { AppContext } from '../contexts/app-context'

function Longboard () {
  const context = useContext(AppContext)

  console.log(context)
  return (
    <div className="App">
      <header className="App-header">
        <p>/Longboard</p>
        <p>{}</p>
      </header>
    </div>
  )
}

export default Longboard
