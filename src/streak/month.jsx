import { useState, useEffect } from 'react'
import './month.css'
import fuego from '../assets/Vector.svg';

function Month( {nombreMes, color} ) {

  return (
    <>
    <div className='container-mes'>
        <div className='fondo-mes'>
            <img src={fuego} className='iconoStr'></img>
        </div>  

        <div>
            <h3>{nombreMes}</h3>
        </div>
    </div>
    </>
  )
}

export default Month
