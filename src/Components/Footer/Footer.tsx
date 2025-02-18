import React from 'react'
import { ReactNode } from 'react'
interface IFooterProps{

}

const hour = new Date().getHours()
const open = 12
const closeHour = 23
const isOpen = hour  >= open && hour < closeHour


function Footer() {
  return (
    
    isOpen ? <p>We're currently open untill {closeHour}:00</p> : <p>We open again at {open}:00</p> 
  )
}

export default Footer