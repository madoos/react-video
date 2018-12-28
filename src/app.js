import React from 'react'
import Home from './pages/containers/Home'

const App = ({data}) => {
  return (
    <div className="app-component">
      <Home data={data} />
    </div>
  )
}

export default App
