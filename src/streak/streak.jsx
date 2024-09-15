import { useState, useEffect } from 'react'
import './streak.css'
import Month from './month'
function Streak() {

  return (
    <>
    <h2>Streaks</h2>
    <div className='container-Meses'>
        <Month nombreMes={'Enero'}></Month>
        <Month nombreMes={'Febrero'}></Month>
        <Month nombreMes={'Marzo'}></Month>
    </div>
    </>
  )
}

export default Streak
