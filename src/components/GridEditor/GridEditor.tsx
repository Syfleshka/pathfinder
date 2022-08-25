import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setGrid } from '../../redux/actions/grid'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { setTurns } from '../../redux/actions/turns'
import { setStartPosition } from '../../redux/actions/startPosition'

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
    return grid?.rows === gridData.rows &&
      grid?.columns === gridData?.columns &&
      turns === turnsData;

  }

  return (
    <form className="form" onSubmit={(event) => buildGrid(event)}>
      <div className="inputs">
        <select
          className="input"
          name="columns"
          id="columns"
          defaultValue={gridData.columns}
          onChange={(e) => handleColumns(e)}
          required
        >
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
          <option value={6}>6</option>
          <option value={7}>7</option>
          <option value={8}>8</option>
          <option value={9}>9</option>
        </select>
        <label htmlFor="columns">cols</label>
        <span className="x">x</span>
        <select
          className="input"
          name="rows"
          id="rows"
          defaultValue={gridData.rows}
          onChange={(e) => handleRows(e)}
          required
        >
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
          <option value={6}>6</option>
          <option value={7}>7</option>
          <option value={8}>8</option>
          <option value={9}>9</option>
        </select>
        <label htmlFor="rows">rows</label>
      </div>
      <div className="inputs">
        <select
          className="input"
          name="turns"
          id="turns"
          defaultValue={turnsData}
          onChange={(e) => handleTurns(e)}
          required
        >
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
          <option value={6}>6</option>
          <option value={7}>7</option>
          <option value={8}>8</option>
          <option value={9}>9</option>
        </select>
        <label htmlFor="turns">turns</label>
      </div>
      <div className="btn-link">
        <button className="btn" type="submit" disabled={isDisabled()}>
          <div>Apply</div>
        </button>
      </div>
      <p className="center">
        Current setup: <br />
        {grid?.columns} columns <br />
        {grid?.rows} rows <br />
        {turns} turns
      </p>
    </form>
  )
}

export default GridEditor
