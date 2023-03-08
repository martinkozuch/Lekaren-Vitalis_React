import React from 'react'
import './topNav.css'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {BsStopwatch} from 'react-icons/bs'

const TopNav = () => {
  return (
    <div className='top-nav'>
        <p className='hours'> <BsStopwatch /> Pondelok-Piatok, 8:00 - 17:00</p>
        <p className='contact'> <BsFillTelephoneFill/>  tel:033/593 60 43</p>
    </div>
  )
}

export default TopNav