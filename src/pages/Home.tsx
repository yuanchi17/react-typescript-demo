import React, { useContext } from 'react'
import { AppContext } from '../contexts/app-context'

function Home () {
  const { count } = useContext(AppContext)

  return (
    <div className="App">
      <header className="App-header">
        <p>{count}</p>
        {/* <button onClick={() => { setCount(c => c + 1) }}>按我</button> */}
      </header>
    </div>
  )
}

export default Home
