import React from 'react'
import classes from './FooterList.module.scss'
import VectorIcons from '../../../assets/VectorIcons.svg'

const FooterList = ({ title, children }) => {
  return (
    <div className={classes.navList}>
      <img src={VectorIcons} alt="VectorIcons" />
      <div className={classes.mainSpan}>
        <span>
          <strong
            className={title === 'Документи' ? classes.navListActive : ''}
          >
            {title}
          </strong>
        </span>
        {children}
      </div>
    </div>
  )
}

export default FooterList
