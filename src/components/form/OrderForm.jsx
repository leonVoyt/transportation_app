import React, { useEffect, useState } from 'react'
import FormMapPointInput from './formMapPointInput/FormMapPointInput'
import classes from './OrderForm.module.scss'
import { useJsApiLoader } from '@react-google-maps/api'
import CheckBox from '../UI/input/checkBoxInput/CheckBox'
import MyButton from '../UI/button/MyButton'
import FormPayment from './formPayment/FormPayment'
import FormContacts from './formContacts/FormContacts'
import FormAboutCargo from './formAboutCargo/FormAboutCargo'

const OrderForm = ({
  setCenter,
  setDeliveryOfTransport,
  setDistance,
  setDirectionsResponse,
  handleSelectisforwarderServices,
  isforwarderServices,
  setWorkiHoursOfLoaders,
}) => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_KEY,
    libraries: ['places'],
  })

  const [cityName, setCityName] = useState('')
  const [selectedOption, setSelectedOption] = useState('option1')

  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const [waypoints, setWayPoints] = useState([
    { id: 0, location: '', workHours: 0 },
    { id: 1, location: '', workHours: 0 },
  ])

  const handleDeleteWaypoint = (id) => {
    if (waypoints.length > 2) {
      setWayPoints((prev) => prev.filter((waypoint) => waypoint.id !== id))
    } else {
      alert('Кількість точок не може бути меншою 2')
    }
  }
  const handleCreatePoint = () => {
    setWayPoints((prev) => [
      ...prev,
      { id: Math.random(), location: '', workHours: 0 },
    ])
  }

  const handleOptionChange = (event) => {
    const newValue = event.target.value
    setSelectedOption(newValue)
  }
  async function calculateRoute(e) {
    e.preventDefault(e)

    //other points on the road
    try {
      const directionsService = new window.google.maps.DirectionsService()
      const DelivOfTrans = await directionsService.route({
        origin: cityName,
        destination: waypoints[0].location,

        travelMode: window.google.maps.TravelMode.DRIVING,
      })

      setDeliveryOfTransport(
        Math.floor(
          DelivOfTrans.routes[0].legs.reduce(
            (acc, rDistance) => acc + rDistance.distance.value,
            0
          ) / 1000
        )
      )
      let filterWaypoints = []
      if (waypoints.length > 2) {
        waypoints.forEach(
          (el, index) =>
            index !== 0 &&
            index !== waypoints.length - 1 &&
            filterWaypoints.push({ location: el.location })
        )
      }

      const results = await directionsService.route({
        origin: waypoints[0].location,
        destination: waypoints[waypoints.length - 1].location,
        waypoints: filterWaypoints,

        travelMode: window.google.maps.TravelMode.DRIVING,
      })

      setDirectionsResponse(results)
      setDistance(
        Math.floor(
          results.routes[0].legs.reduce(
            (acc, rDistance) => acc + rDistance.distance.value,
            0
          ) / 1000
        )
      )
    } catch (error) {
      alert('Заповніть Адрессу')
    }
  }

  useEffect(() => {
    // Get current location using browser geolocation API
    const fetch = async () => {
      if (navigator.geolocation && isLoaded) {
        await navigator.geolocation.getCurrentPosition(
          (position) => {
            const currentLocation = {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            }

            setCenter(currentLocation)

            // Use Google Geocoding API to get the city name
            const geocoder = new window.google.maps.Geocoder()
            geocoder.geocode(
              { location: currentLocation },
              (results, status) => {
                if (status === 'OK' && results[0]) {
                  setCityName(results[0].address_components[2].long_name) // Assuming city name is at index 2
                } else {
                  console.error('Geocoding failed:', status)
                }
              }
            )
          },
          (error) => {
            console.error('Error getting current location:', error)
          }
        )
      } else {
        console.error('Geolocation is not supported by this browser.')
      }
    }
    fetch()
  }, [isLoaded])
  return (
    <form id="form" onSubmit={calculateRoute}>
      <div className={classes.cardList}>
        {waypoints.map((waypoint, index) => (
          <FormMapPointInput
            markName={alphabet[index]}
            setWayPoints={setWayPoints}
            id={waypoint.id}
            key={waypoint.id}
            setWorkiHoursOfLoaders={setWorkiHoursOfLoaders}
            handleDeleteWaypoint={handleDeleteWaypoint}
          />
        ))}
        <div className={classes.formAction}>
          <MyButton title={'Додати ще одну точку'} action={handleCreatePoint} />
          <MyButton title={'Розахувати маршрут'} />
        </div>
      </div>
      <hr className={classes.hrLine} />
      <FormAboutCargo />
      <hr className={classes.hrLine} />
      <CheckBox
        name={'Послуга експедитора'}
        handleOptionChange={handleSelectisforwarderServices}
        idName={'isforwarderServices'}
        isChecked={isforwarderServices}
      />
      <hr className={classes.hrLine} />
      <FormContacts />
      <hr className={classes.hrLine} />
      <FormPayment
        handleOptionChange={handleOptionChange}
        selectedOption={selectedOption}
      />
    </form>
  )
}

export default OrderForm
