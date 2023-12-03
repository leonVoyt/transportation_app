import React, { useRef } from 'react'
import classes from './FormMapPointInput.module.scss'
import { Autocomplete, useJsApiLoader } from '@react-google-maps/api'
import DateInput from '../../UI/input/dateInput/DateInput'
import Frame from '../../../assets/Frame.png'

const FormMapPointInput = ({
  markName,
  id,
  setWayPoints,
  setWorkiHoursOfLoaders,
  handleDeleteWaypoint,
}) => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_KEY,
    libraries: ['places'],
  })
  const originRef = useRef()

  const handleOnChange = (value) => {
    setWayPoints((prev) => {
      const copy = [...prev]
      return copy.map((el) => (el.id === id ? { ...el, location: value } : el))
    })
  }

  const handleOnChangeWorkHours = (value) => {
    setWayPoints((prev) => {
      const copy = [...prev]
      const updateWaypoints = copy.map((el) =>
        el.id === id ? { ...el, workHours: Number(value) } : el
      )
      setWorkiHoursOfLoaders(
        updateWaypoints.reduce((acc, wayPoint) => acc + wayPoint.workHours, 0)
      )
      return updateWaypoints
    })
  }

  return (
    <div className={classes.card}>
      <strong>Точка {markName}</strong>
      <div className={classes.cardRow}>
        <div className={classes.cardColumn}>
          {markName === 'A' && (
            <div className={classes.cardItem}>
              <label htmlFor="">Дата</label>
              <DateInput />
            </div>
          )}

          <div className={classes.cardItem}>
            <label htmlFor={markName + 'cityAdress'}>Адреса</label>
            <div
              style={{ display: 'flex', width: '100%', position: 'relative' }}
            >
              {isLoaded ? (
                <Autocomplete
                  onPlaceChanged={() => handleOnChange(originRef.current.value)}
                  className={classes.test}
                >
                  <input
                    onChange={(e) => handleOnChange(e.target.value)}
                    type="text"
                    placeholder="Київ"
                    id={markName + 'cityAdress'}
                    className={classes.input}
                    ref={originRef}
                    required
                  />
                </Autocomplete>
              ) : (
                <div>loading...</div>
              )}
              <label htmlFor={markName + 'cityAdress'}>
                <img
                  src={Frame}
                  alt="cityAdressMark"
                  width={25}
                  style={{ position: 'absolute', right: 3, cursor: 'pointer' }}
                />
              </label>
            </div>
          </div>
        </div>
        <div className={classes.cardColumn}>
          <div className={classes.cardItem}>
            <label htmlFor="">Час роботи (год)</label>
            <input
              type="number"
              placeholder="1"
              required
              className={classes.inputShort}
              min="1"
              onChange={(e) => handleOnChangeWorkHours(e.target.value)}
              title="Please enter only numbers"
            />
          </div>
          {markName === 'A' && (
            <div className={classes.cardItem}>
              <label htmlFor="arrivaltime">Час прибуття</label>
              <input
                type="time"
                id="arrivaltime"
                required
                className={classes.inputShort}
                title="Please enter only numbers"
              />
            </div>
          )}
        </div>
      </div>
      <button
        onClick={() => handleDeleteWaypoint(id)}
        className={classes.deleteBtn}
      >
        ❌
      </button>
    </div>
  )
}

export default FormMapPointInput
