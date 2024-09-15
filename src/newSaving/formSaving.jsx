import { useState, useEffect } from 'react'
import './formSaving.css'

function FormSaving( {idComponent, title}) {
  return (
    <>
        <div className='cont-newSaving-input'>
            <div className='container-Input'>
                <h3>Cantidad</h3>
                <input type='text' placeholder='$'></input>
            </div>

            <div className='container-Input'>
                <h3>Fecha para cumplirla</h3>
                <input type='date'></input>
            </div>
            
            <div className='container-Input'>
                <h3>Prioridad</h3>
                <select defaultValue={'Alta'}>
                    <option value='Alta'>Alta</option>
                    <option value='Media'>Media</option>
                    <option value='Baja'>Baja</option>
                </select>
            </div>
        </div>
    </>
  )
}

export default FormSaving
