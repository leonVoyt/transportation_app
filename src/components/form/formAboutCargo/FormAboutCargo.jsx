import React from 'react'
import classes from './FormAboutCargo.module.scss'

const FormAboutCargo = () => {
  return (
    <div className={classes.aboutCargoMainContainer}>
      <span className={classes.headText}>Про вантаж</span>
      <div className={classes.aboutCargoContainer}>
        <div className={classes.cargoInfo}>
          <label htmlFor="weight">Вага ватнажу (кг)</label>
          <input
            type="number"
            id="weight"
            className={classes.input}
            required
            min={1}
            placeholder="Укажіть вагу вантажу"
          />
        </div>
        <div className={classes.cargoInfo}>
          <label htmlFor="Dimensions">Габарит вантажу ДШВ (м)</label>
          <div className={classes.cargoDimensions}>
            <input
              type="number"
              id="Dimensions"
              className={classes.inputShort}
              required
              min={1}
              pattern="[0-9+]"
              title="Please enter only numbers"
              placeholder="Довжина"
            />
            x
            <input
              type="number"
              id="Dimensions"
              className={classes.inputShort}
              required
              min={1}
              pattern="[0-9+]"
              title="Please enter only numbers "
              placeholder="Ширина"
            />
            x
            <input
              type="number"
              id="Dimensions"
              className={classes.inputShort}
              required
              min={1}
              pattern="[0-9+]"
              title="Please enter only numbers  "
              placeholder="Висота"
            />
          </div>
        </div>
      </div>
      <label htmlFor="text-area-about">Коментар до замовлення</label>
      <textarea
        placeholder="Укажіть інформацію про груз, що перевозите..."
        name=""
        id="text-area-about"
        cols="30"
        rows="10"
        className={classes.textarea}
        maxLength={4000}
      ></textarea>
    </div>
  )
}

export default FormAboutCargo
