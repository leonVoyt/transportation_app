import React, { useState } from 'react'
import classes from './CheckBox.module.scss'

const CheckBox = ({
  name,
  idName,
  type = 'default',
  handleOptionChange,
  isChecked,
}) => {
  return (
    <div className={classes.container}>
      <input
        onChange={handleOptionChange}
        id={idName}
        name={idName}
        type="checkbox"
        className={classes.checkBox}
        checked={isChecked}
      />
      <label htmlFor={idName} className="cursor-pointer">
        {name}
      </label>
    </div>
  )
}

export default CheckBox
