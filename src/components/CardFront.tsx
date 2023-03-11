import React from 'react'
import '../assets/css/CardFront.css'
import '../assets/css/Card.css'

const CardFront = () => {
  

  return (
    <div className="card front">
        <img className="card-front__logo" src="card-logo.svg"></img>
        <span className="card-front__number">0000 0000 0000 0000</span>
        <span className="card-front__name">JANE APPLESEED</span>
        <span className="card-front__date">00/00</span>
    </div>
  )
}

export default CardFront