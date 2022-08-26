import React, { ChangeEvent } from 'react'

function OptInput(props: {
  id: string
  name: string
  min: number
  max: number
  label: string
  value: number
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void
}) {
  const minMaxArr = Array.from(
    { length: props.max - props.min + 1 },
    (_, i) => i + props.min
  )
  return (
    <>
      <select
        className="input"
        name={props.name}
        id={props.id}
        defaultValue={props.value}
        onChange={props.onChange}
        required
      >
        {minMaxArr.map((i) => (
          <option key={i} value={i}>
            {i}
          </option>
        ))}
      </select>
      <label htmlFor="columns">{props.label}</label>
    </>
  )
}

export default OptInput
