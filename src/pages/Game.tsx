import React from 'react'
import GridEditor from '../components/GridEditor/GridEditor'
import Table from '../components/Table/Table'
import './Game.scss'
import GameStarter from '../components/GameStarter/GameStarter'
import Steps from '../components/Steps/Steps'
import GameStats from '../components/GameStats/GameStats'

function Game() {
  return (
    <div className="game">
      <div className="page" id="options">
        <GridEditor />
        <GameStarter />
      </div>
      <div className="page">
        <div className="game-wrapper">
          <Table />
          <Steps />
          <GameStats />
        </div>
      </div>
    </div>
  )
}

export default Game
