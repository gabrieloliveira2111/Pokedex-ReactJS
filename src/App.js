import { React, useContext, useEffect } from 'react'
import './App.css'
import { AppContext } from './contexts/AppContext'
import Home from './Home'

function App() {
  return (
    <div className="App">
      <Home></Home>
    </div>
  )
}

export default App
