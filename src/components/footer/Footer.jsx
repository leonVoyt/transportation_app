import React from 'react'
import classes from './Footer.module.scss'
import LogoIcon from '../icons/LogoIcon'
import FooterCategories from './footerCategories/FooterCategories'

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <span>
        <LogoIcon height={24} />
      </span>
      <FooterCategories />

      <div className={classes.company}>
        ©ТОВ «Діджітал інвест адвайзор», 2021-2023
      </div>
    </footer>
  )
}

export default Footer
