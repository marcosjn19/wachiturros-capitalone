import { useState, useEffect } from 'react'
import './NewSaving.css'
import HeaderSaving from './headerSaving.jsx'
import FormSaving from './formSaving.jsx'
import MenuSaving from './menuSaving.jsx'
function NewSaving() {
  return (
    <>
    <div className='main-newSaving'>
      <div>
        <HeaderSaving></HeaderSaving>
      </div>
      <FormSaving></FormSaving>
      <MenuSaving></MenuSaving>
    </div>
    </>
  )
}

export default NewSaving
