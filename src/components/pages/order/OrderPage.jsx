import React, { useState } from 'react'
import classes from './OrderPage.module.scss'
import OrderInfo from '../../orderPageComponents/orderInfo/OrderInfo'
import OrderForm from '../../form/OrderForm'

const OrderPage = () => {
  const [directionsResponse, setDirectionsResponse] = useState(null)
  const [DeliveryOfTransport, setDeliveryOfTransport] = useState(0)
  const [distance, setDistance] = useState('')
  const [center, setCenter] = useState({ lat: 50.27, lng: 30.31 })
  const [workiHoursOfLoaders, setWorkiHoursOfLoaders] = useState(0)

  const [isforwarderServices, setIsForwarderServices] = useState(false)

  const handleSelectisforwarderServices = () => {
    setIsForwarderServices(!isforwarderServices)
  }

  return (
    <div className={classes.container}>
      <strong className={classes.mainText}>Замовити</strong>
      <div className={classes.content}>
        <div className={classes.settings}>
          <span className={classes.headText}>Маршут</span>
          <OrderForm
            handleSelectisforwarderServices={handleSelectisforwarderServices}
            isforwarderServices={isforwarderServices}
            setCenter={setCenter}
            setDeliveryOfTransport={setDeliveryOfTransport}
            setDirectionsResponse={setDirectionsResponse}
            setDistance={setDistance}
            setWorkiHoursOfLoaders={setWorkiHoursOfLoaders}
          />
        </div>
        <OrderInfo
          directionsResponse={directionsResponse}
          distance={distance}
          center={center}
          DeliveryOfTransport={DeliveryOfTransport}
          isforwarderServices={isforwarderServices}
          workiHoursOfLoaders={workiHoursOfLoaders}
        />
      </div>
    </div>
  )
}

export default OrderPage
