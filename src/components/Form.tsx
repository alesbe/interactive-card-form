import React, { useEffect, useState } from 'react'
import '../assets/css/Form.css'

const Form = () => {
  const [name, setName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expMonth, setExpMonth] = useState('');
  const [expYear, setExpYear] = useState('');
  const [cvc, setCvc] = useState('');

  /* Format card number */
  useEffect(() => {
    let splittedCard = [...cardNumber.replace(/\s/g, '')];

    // Remove every character if it's not a number or space
    for(let n = 0; n < splittedCard.length; n++) {
      if(!/^\d+$/.test(splittedCard[n]) && splittedCard[n] != " ") {
        splittedCard.splice(n, 1);
      }
    }

    // Add spaces every 4 digits
    for(let n = 0; n < splittedCard.length; n++) {
      if(n == 4 || n == 9 || n == 14 || n == 19) {
        splittedCard.splice(n, 0, " ");
      }
    }

    setCardNumber(splittedCard.join(""));
  }, [cardNumber])
  

  return (
    <form className="card-form">
      <label className="form-label" htmlFor="fcardholder-name">CARDHOLDER NAME</label><br></br>
      <input required type="text" maxLength={40} className="form-input" id="fcardholder-name" name="fcardholder-name" placeholder="e.g. Jane Appleseed"></input><br></br>
      <label className="form-label" htmlFor="fcard-number">CARD NUMBER</label><br></br>
      <input required type="text" className="form-input" id="fcard-number" name="fcard-number" maxLength={19} placeholder="e.g. 1234 5678 0000" value={cardNumber} onChange={e => setCardNumber(e.target.value)}></input><br></br>

      <div className="card-form__group-row">
          <div className="card-form__group-col">
          <label className="form-label" htmlFor="fcardholder-name">EXP. DATE (MM/YY)</label><br></br>
          <div className="card-form__double-input">
              <input required type="number" maxLength={2} className="form-input" id="fcardholder-name" name="fcardholder-name" placeholder="MM"></input>
              <input required type="number" maxLength={2} className="form-input" id="fcard-number" name="fcard-number" placeholder="YY"></input>
          </div>
          </div>
          <div className="card-form__group-col">
              <label className="form-label" htmlFor="fcard-number">CVC</label><br></br>
              <input required type="number" maxLength={3} className="form-input" id="fcard-number" name="fcard-number" placeholder="e.g. 123"></input>
          </div>
      </div>

      <button className="form__submit-button">Confirm</button>
    </form>
  )
}

export default Form