import React from 'react'
import './onas.css'
import {MdDoneOutline} from 'react-icons/md'
import onas from '../img/20230213_164124.jpg'
import { RiHeartPulseFill } from 'react-icons/ri'
import {FaPills} from 'react-icons/fa'
import {FaThermometer} from 'react-icons/fa'
import {MdHealthAndSafety} from 'react-icons/md'
const Onas = () => {
  return (
    <div className='onas-container' id='onas'>

        <h1>O NÁS</h1>
        <p className='special-p'>
        Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. </p>
        <div className='onas-box'>
            <img src={onas} alt=''></img>
            <div className='onas-right'> 
                <h2>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <ul>
                    <li><MdDoneOutline /> Ullamco laboris nisi ut aliquip ex ea commodo consequat. </li>
                    <li><MdDoneOutline /> Duis aute irure dolor in reprehenderit in voluptate velit. </li>
                    <li><MdDoneOutline /> Duis aute irure dolor in reprehenderit in voluptate velit. </li>
                </ul>
                <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            </div>
        </div>
<div className='onas-cards'>
    <div className='one-card'>
   <h3> <RiHeartPulseFill></RiHeartPulseFill></h3>
        <h4>Lorem Ipsum</h4>
        <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
        
    </div>
    <div className='one-card'>
        <h3><FaPills></FaPills></h3>
        <h4> Sed ut perspiciatis</h4>
        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>

    </div>
    <div className='one-card'>
        <h3><FaThermometer></FaThermometer></h3>
        <h4>Magni Dolores</h4>
        <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>

    </div>
    <div className='one-card'>
        <h3><MdHealthAndSafety></MdHealthAndSafety></h3>
        <h4>Nemo Enim</h4>
        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>

    </div>
    </div>
</div>

  )
}

export default Onas