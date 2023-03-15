import React from 'react'
import { Link } from 'react-router-dom'
import { useApp } from '../contexts/app-context'

function Home () {
  const { count, dispatch } = useApp()

  return (
    <div className="App">
      <header className="App-header">
        <p>Home</p>
        <p>{count}</p>
        <button onClick={() => { dispatch({ type: 'addCount' }) }}>+++</button>
        <Link to='/'>Home</Link>
        <Link to='/longboard'>longboard</Link>
      </header>
    </div>
  )
}

export default Home
