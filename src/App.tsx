import React from 'react'
import './App.scss'
import ThemeSwitch from './components/ThemeSwitch/ThemeSwitch'
import GridEditor from './components/GridEditor/GridEditor'
import GameStarter from './components/GameStarter/GameStarter'
import Game from './components/Game/Game'
import Steps from './components/Steps/Steps'
import GameStats from './components/GameStats/GameStats'

function App() {
  return (
    <>
      <div className="menu">
        <ThemeSwitch />
      </div>
      <div className="game">
        <div className="page" id="options">
          <GridEditor />
          <GameStarter />
        </div>
        <div className="page">
          <div className="game-wrapper">
            <Game />
            <Steps />
            <GameStats />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
