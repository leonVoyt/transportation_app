import React from 'react'
import classes from './DateInput.module.scss'

const DateInput = () => {
  return (
    <div className={classes.block}>
      <input type="date" id="date-input" required />
      <div className={classes.line}></div>
    </div>
  )
}

export default DateInput
