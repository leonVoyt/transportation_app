import React from 'react'
import logo from '../../assets/logo.svg'
import classes from './LogoIcon.module.scss'

const LogoIcon = ({ height = 26 }) => {
  return <img src={logo} alt="logo" height={height} className={classes.image} />
}

export default LogoIcon
