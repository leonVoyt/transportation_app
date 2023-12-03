import React from 'react'
import classes from './RadioInput.module.scss'

const RadioInput = ({
  name,
  idName,
  type = 'default',
  handleOptionChange,
  selectedOption,
}) => {
  return (
    <div
      className={
        type === 'default' ? classes.container : classes.containerInline
      }
    >
      <input
        onChange={(e) => handleOptionChange(e)}
        id={idName}
        name={idName}
        value={idName}
        type="radio"
        className={
          type === 'default' ? classes.checkBox : classes.checkBoxInline
        }
        checked={selectedOption === idName}
      />
      <label htmlFor={idName} className="cursor-pointer">
        {name}
      </label>
    </div>
  )
}

export default RadioInput
