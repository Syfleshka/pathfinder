import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setGrid } from '../../redux/actions/grid'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { setTurns } from '../../redux/actions/turns'
import { setStartPosition } from '../../redux/actions/startPosition'
import OptInput from '../OptInput/OptInput'

function GridEditor() {
  const dispatch = useDispatch()
  const grid = useTypedSelector((store) => store?.grid)
  const turns = useTypedSelector((store) => store?.turns)
  const [gridData, setGridData] = useState(grid)
  const [turnsData, setTurnsData] = useState(turns)

  function buildGrid(event: FormEvent) {
    event.preventDefault()
    dispatch(setGrid(gridData))
    dispatch(setTurns(turnsData))
  }
  useEffect(() => {
    dispatch(setStartPosition(grid))
  }, [dispatch, grid])

  function handleColumns(e: ChangeEvent<HTMLSelectElement>) {
    setGridData({ ...gridData, columns: Number(e.target.value) })
  }

  function handleRows(e: ChangeEvent<HTMLSelectElement>) {
    setGridData({ ...gridData, rows: Number(e.target.value) })
  }

  function handleTurns(e: ChangeEvent<HTMLSelectElement>) {
    setTurnsData(Number(e.target.value))
  }

  const isDisabled = () => {
    return (
      grid?.rows === gridData.rows &&
      grid?.columns === gridData?.columns &&
      turns === turnsData
    )
  }

  return (
    <form className="form" onSubmit={(event) => buildGrid(event)}>
      <h1 className="h1">Options:</h1>
      <div className="inputs">
        <OptInput
          id="columns"
          name="columns"
          min={2}
          max={9}
          label="cols"
          value={gridData?.columns}
          onChange={(e) => handleColumns(e)}
        />
        <span className="x">x</span>
        <OptInput
          id="rows"
          name="rows"
          min={2}
          max={9}
          label="rows"
          value={gridData?.rows}
          onChange={(e) => handleRows(e)}
        />
      </div>
      <div className="inputs">
        <OptInput
          id="turns"
          name="turns"
          min={3}
          max={9}
          label="turns"
          value={turns}
          onChange={(e) => handleTurns(e)}
        />
      </div>
      <div className="btn-link">
        <button className="btn" type="submit" disabled={isDisabled()}>
          <div>Apply</div>
        </button>
      </div>
      <p className="small">
        Current setup: <br />
        {grid?.columns} columns <br />
        {grid?.rows} rows <br />
        {turns} turns
      </p>
      <h4 className="h4">How to play:</h4>
      <ul className="small">
        <li>Green text in table is your start position</li>
        <li>You must find end position cell by following the steps</li>
      </ul>
    </form>
  )
}

export default GridEditor
