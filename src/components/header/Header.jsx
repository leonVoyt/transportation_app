import React from 'react'
import classes from './Header.module.scss'
import MyButton from '../UI/button/MyButton'
import NavList from './navigationList/NavList'
import LogoIcon from '../icons/LogoIcon'
import search from '../../assets/search.svg'

const Header = () => {
  return (
    <header className={classes.navBar}>
      <LogoIcon />
      <span className={classes.hidden}>
        <MyButton title="Категорії" />
      </span>
      <div className={classes.myInputContainer}>
        <input type="text" className={classes.myInput} />
        <img src={search} alt="search" className={classes.icon} />
      </div>
      <span className={classes.hidden}>
        <MyButton title="Створити оголошення" type={'dark'} />
      </span>
      <span className={classes.hidden}>
        <NavList />
      </span>
      <div className={classes.burger}>
        <div className={classes.burgerItem}></div>
        <div className={classes.burgerItem}></div>
        <div className={classes.burgerItem}></div>
      </div>
    </header>
  )
}

export default Header
