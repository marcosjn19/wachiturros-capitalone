import { useState, useEffect } from 'react'
import './App.css'
import NewSaving from './newSaving/NewSaving'
import HeaderMain from './headerMain/headerMain'
import Streak from './streak/streak'
import Savings from './savings/savings'
function App() {

  return (
    <>
    <HeaderMain></HeaderMain>
    <Streak></Streak>
    <Savings></Savings>
    </>
  )
}

export default App
