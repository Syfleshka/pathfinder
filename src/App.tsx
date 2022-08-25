import React from 'react'
import './App.scss'
import ThemeSwitch from './components/ThemeSwitch/ThemeSwitch'
import Game from './pages/Game'

function App() {
  return (
    <>
      <div className="menu">
        <ThemeSwitch />
      </div>
      <Game />
    </>
  )
}

export default App
