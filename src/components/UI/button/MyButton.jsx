import React from 'react'
import classes from './MyButton.module.scss'

const MyButton = ({ title, type = 'default', action }) => {
  return (
    <button className={classes[btnTypes[type]]} onClick={action && action}>
      {title}
    </button>
  )
}

export default MyButton

export const btnTypes = {
  default: 'myDefaultBtn',
  dark: 'myDarkBtn',
}
