import React from 'react'
import FooterList from '../footerList/FooterList'

import mark from '../../../assets/mark.svg'
import mail from '../../../assets/mail.svg'
import telegram from '../../../assets/telegram.svg'
import viber from '../../../assets/viber.svg'
import facebook from '../../../assets/facebook.svg'
import instagram from '../../../assets/instagram.svg'
import youtube from '../../../assets/youtube.svg'
import Google_Play from '../../../assets/Google_Play_Store_badge_EN.svg'
import appStore from '../../../assets/appStore.svg'
import liqpay from '../../../assets/liqPay.png'
import visa from '../../../assets/visa.png'
import mastercard from '../../../assets/mastercard.png'

import classes from './FooterCategories.module.scss'

const FooterCategories = () => {
  return (
    <div className={classes.container}>
      <FooterList title={'Сторінки'}>
        <span>Про нас</span>
        <span>Про сервіс</span>
        <span>FAQ</span>
        <span>Команда</span>
      </FooterList>
      <FooterList title={'Контакти'}>
        <span className={classes.centralSpan}>
          <img src={mark} alt="mark" />
          Київ-03188
        </span>
        <span className={classes.centralSpan}>
          <img src={mail} alt="mail" />
          moow.ltd@gmail.com
        </span>
        <span>
          <img src={telegram} alt="telegram" />
        </span>
        <span>
          <img src={viber} alt="viber" />
        </span>
      </FooterList>
      <FooterList title={'Cоціальні мережі'}>
        <div style={{ display: 'flex', columnGap: 10 }}>
          <img src={facebook} alt="facebook" />
          <img src={instagram} alt="instagram" />
          <img src={youtube} alt="youtube" />
        </div>
      </FooterList>
      <FooterList title={'Документи'}></FooterList>
      <div>
        <strong>Встанови безкоштовний додаток на смартфон</strong>
        <div className={classes.firstAppList}>
          <img src={Google_Play} alt="Google_Play" />
          <img src={appStore} alt="appStore" />
        </div>
        <div className={classes.secondAppList}>
          <img src={visa} alt="visa" />
          <img src={mastercard} alt="mastercard" />
          <img src={liqpay} alt="liqpay" height={15} />
        </div>
      </div>
    </div>
  )
}

export default FooterCategories
