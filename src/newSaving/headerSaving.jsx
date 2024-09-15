import { useState, useEffect } from 'react'
import './headerSaving.css'
import Egg from '../assets/EggNewSaving.svg'
function HeaderSaving() {
  return (
    <>
    <div className='cont-head'>
        <input type='text' className='name-Saving' id='nameSaving' placeholder='Meta'></input>
        <div className='eggSvg'>
            <img src={Egg}></img>
        </div>
    </div>
    </>
  )
}

export default HeaderSaving
