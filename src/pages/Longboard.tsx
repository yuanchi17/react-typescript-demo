import React, { useContext } from 'react'
import { AppContext } from '../contexts/app-context'
import { Link } from 'react-router-dom'

function Longboard () {
  const context = useContext(AppContext)

  console.log(context)
  return (
    <div className="App">
      <header className="App-header">
        <p>/Longboard</p>
        <p>{context?.count}</p>
        <Link to='/'>Home</Link>
        <Link to='/longboard'>longboard</Link>
      </header>
    </div>
  )
}

export default Longboard
