import React from 'react'
import { Link } from 'react-router-dom'
import { useApp } from '../contexts/app-context'

function Longboard () {
  const { count, longboardDatas, dispatch } = useApp()

  console.log(longboardDatas)
  return (
    <div className="App">
      <header className="App-header">
        <p>/Longboard</p>
        <p>{count}</p>
        <p>{longboardDatas.freestyle}</p>
        <button onClick={() => { dispatch({ type: 'reset' }) }}>reset</button>
        <button onClick={() => { dispatch({ type: 'addLbFs', item: 'test' }) }}>新增項目</button>
        <Link to='/'>Home</Link>
        <Link to='/longboard'>longboard</Link>
      </header>
    </div>
  )
}

export default Longboard
