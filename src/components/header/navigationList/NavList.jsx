import React from 'react'
import dialog from '../../../assets/dialog.svg'
import building from '../../../assets/building.svg'
import user from '../../../assets/user.svg'
import bell from '../../../assets/bell.svg'
import more from '../../../assets/more.svg'

import classes from './NavList.module.scss'

const NavList = () => {
  return (
    <div className={classes.navList}>
      <img src={dialog} alt={'dialog'} />
      <img src={building} alt={'building'} />
      <div className={classes.navListItem}>
        <img src={user} alt={'user'} />
      </div>
      <div className={classes.navListItem}>
        <img src={bell} alt={'bell'} />
      </div>
      <div className={classes.navListItem}>
        <img src={more} alt={'more'} />
      </div>
      <select name="" id="" className={classes.langSelect}>
        <option value="">УКР</option>
        <option value="">АНГ</option>
      </select>
    </div>
  )
}

export default NavList
