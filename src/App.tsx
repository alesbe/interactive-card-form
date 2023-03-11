import React from 'react'
import './assets/css/App.css'
import CardBack from './components/CardBack'
import CardFront from './components/CardFront'
import Form from './components/Form'

const App = () => {
  return (
    <div className='app-wrapper'>
        <CardFront/>
        <CardBack/>

        <div className="background-left"></div>
        <main className="form-container">
            <Form/>
        </main>
    </div>
  )
}

export default App