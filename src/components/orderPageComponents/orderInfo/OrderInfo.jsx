import React from 'react'
import Map from '../../map/Map'
import classes from './OrderInfo.module.scss'
import MyButton from '../../UI/button/MyButton'
import train from '../../../assets/train.png'
import star from '../../../assets/Star.svg'
import eye from '../../../assets/eays.svg'
import adverisingMark from '../../../assets/adverisingMark.svg'

const OrderInfo = ({
  directionsResponse,
  distance,
  center,
  DeliveryOfTransport,
  isforwarderServices,
  workiHoursOfLoaders,
}) => {
  const priceDelivOfTrans = DeliveryOfTransport * 10
  const priceDownloadUnload = distance * 20
  const forwarderServices = isforwarderServices ? 200 : 0
  const workOdLoaders = workiHoursOfLoaders * 200
  return (
    <div className={classes.container}>
      <div className={classes.advetising}>
        <div className={classes.adverisinImages}>
          <img
            src={adverisingMark}
            alt="adverisingMark"
            className={classes.adverisingMark}
          />
          <img src={train} alt="trainBoard" style={{ borderRadius: 10 }} />
          <span className={classes.hit}>ХІТ</span>
        </div>
        <div className={classes.advetisingText}>
          <div className={classes.advetisingLeftInf}>
            <span className={classes.textMediumBlack}>
              Склад 1 Склад 1{' '}
              <span className={classes.textHidden}>Склад 1</span>
              <br />
              <span className={classes.textHidden}>
                Склад 1 Склад 1 Склад 1
              </span>
            </span>
            <div>
              <span className={classes.textAccent}>300 грн/кв.м.</span>
              <br />
              <span>min 200 грн/кг</span>
            </div>
          </div>
          <div className={classes.advetisingRightInf}>
            <span>21.06.2022</span>
            <span className={classes.advetisingRightInfContainer}>
              <img src={star} alt="star" />
              <span>4.8</span>
            </span>
            <span className={classes.advetisingRightInfContainer}>
              <img src={eye} alt="eye" />
              <span>12 тис.</span>
            </span>
          </div>
        </div>
      </div>
      <Map directionsResponse={directionsResponse} center={center} />
      <div className={classes.pricing}>
        <div className={classes.infoRow}>
          <span>Подача транспотру</span>
          <span className={classes.textMediumBlack}>
            {priceDelivOfTrans} грн
          </span>
        </div>
        <hr />
        <div className={classes.infoRow}>
          <span>Маршрут загрузка - вигрузка</span>
          <span className={classes.textMediumBlack}>
            {priceDownloadUnload} грн
          </span>
        </div>
        <hr />
        <div className={classes.infoRow}>
          <span>Послуги експедитора</span>
          <span className={classes.textMediumBlack}>
            {forwarderServices} грн
          </span>
        </div>
        <hr />
        <div className={classes.infoRow}>
          <div className={classes.infoRowContainer}>
            <div className={classes.infoRow}>
              <span>Послуги грузчиків</span>
              <span className={classes.textMediumBlack}>
                {workOdLoaders} грн
              </span>
            </div>
            <div className={classes.infoRow}>
              <span> 2 грузчиків</span>
              <span className={classes.textMediumBlack}>200 грн/год</span>
            </div>
            <div className={classes.infoRow}>
              <span>Зайнятість</span>
              <span className={classes.textMediumBlack}>
                {workiHoursOfLoaders} години
              </span>
            </div>
          </div>
        </div>
        <hr />
        <div className={classes.infoRowContainer}>
          <strong className={classes.totalPrice}>Повна ціна:</strong>
          <strong className={classes.totalPriceValue}>
            {priceDelivOfTrans +
              priceDownloadUnload +
              forwarderServices +
              workOdLoaders}{' '}
            грн
          </strong>
        </div>
      </div>
      <MyButton title={'Оформити'} type={'dark'} />
    </div>
  )
}

export default OrderInfo
