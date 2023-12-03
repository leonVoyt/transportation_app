import React from 'react'
import RadioInput from '../../UI/input/radioInput/RadioInput'
import classes from './FormPayment.module.scss'

const FormPayment = ({ handleOptionChange, selectedOption }) => {
  return (
    <div className={classes.paymentContainer}>
      <span className={classes.headText}>Payment</span>
      <RadioInput
        name={'Послуга експедитора'}
        type="inline"
        handleOptionChange={handleOptionChange}
        idName={'option1'}
        selectedOption={selectedOption}
      />
      <RadioInput
        name={'Послуга експедитора'}
        type="inline"
        handleOptionChange={handleOptionChange}
        idName={'option2'}
        selectedOption={selectedOption}
      />
      <RadioInput
        name={'Послуга експедитора'}
        type="inline"
        handleOptionChange={handleOptionChange}
        idName={'option3'}
        selectedOption={selectedOption}
      />
    </div>
  )
}

export default FormPayment
