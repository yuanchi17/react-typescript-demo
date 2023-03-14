import React, { useContext } from 'react'
import { AppContext } from '../contexts/app-context'

function Home () {
  const context = useContext(AppContext)

  return (
    <div className="App">
      <header className="App-header">
        <p>{context?.count}</p>
        {/* <button onClick={() => {  }}>按我</button> */}
      </header>
    </div>
  )
}

export default Home
