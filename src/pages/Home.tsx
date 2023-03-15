import { AppContext } from '../contexts/app-context'
import { count } from 'console'
import { Link } from 'react-router-dom'
import React, { useContext } from 'react'

function Home () {
  const context = useContext(AppContext)

  return (
    <div className="App">
      <header className="App-header">
        <p>Home</p>
        <p>{context?.count}</p>
        <button onClick={() => { context?.setDefaultState({ count: context?.count + 1 }) }}>+++</button>
        <Link to='/'>Home</Link>
        <Link to='/longboard'>longboard</Link>
      </header>
    </div>
  )
}

export default Home
