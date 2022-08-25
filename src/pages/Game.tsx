import React from 'react'
import GridEditor from '../components/GridEditor/GridEditor'
import Table from '../components/Table/Table'
import './Game.scss'
import GameStarter from '../components/GameStarter/GameStarter'
import Steps from '../components/Steps/Steps'

function Game() {
  return (
    <div className="game">
      <div className="page" id="options">
        <GridEditor />
      </div>
      <div className="page">
        <div className="game-wrapper">
          <Table />
          <Steps />
          <GameStarter />
        </div>
      </div>
    </div>
  )
}

export default Game
