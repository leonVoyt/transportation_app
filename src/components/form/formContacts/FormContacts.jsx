import React from 'react'
import classes from './FormContacts.module.scss'

const FormContacts = () => {
  return (
    <>
      <span className={classes.headText}>Контактні дані</span>
      <div className={classes.contactsContainer}>
        <div className={classes.contactsItem}>
          <label htmlFor="surname">Прізвище</label>
          <input
            type="text"
            id="surname"
            className={classes.input}
            required
            pattern="[A-Za-zА-Яа-яЁёІіЇїЄєҐґ]+"
            placeholder="Іванов"
            title="Please enter a surname from letters"
          />
        </div>
        <div className={classes.contactsItem}>
          <label htmlFor="PhoneNumber">Номер телефону</label>
          <input
            type="tel"
            id="PhoneNumber"
            className={classes.input}
            placeholder="+38 (097) 333 3333"
            maxLength="19"
            pattern="[0-9+]+"
            title="Please enter only numbers and the + symbol"
            required
          />
        </div>
        <div className={classes.contactsItem}>
          <label htmlFor="custmerName">Ім'я</label>
          <input
            type="text"
            id="custmerName"
            pattern="[A-Za-zА-Яа-яЁёІіЇїЄєҐґ]+"
            placeholder="Іван"
            title="Please enter a name from letters"
            className={classes.input}
            required
          />
        </div>
      </div>
    </>
  )
}

export default FormContacts
