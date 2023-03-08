import React, {useState} from 'react'
import './navbar.css'
import logo from '../img/Vitalis_logogood-removebg-preview.png'
import { CgMenuRound} from 'react-icons/cg'
import {Link} from 'react-scroll' 


const NavBar = () => {
    const [show, setShow] = useState(false)

  return (
    <div className='nav-container' id='navbar'>
      <div className='nav-left'>
        <img src={logo} alt=""></img>
        <h2>
         <CgMenuRound onClick={() => setShow(!show) }/>
        </h2>
      </div>  
        <ul className={`${show ? "nav-list show" : "nav-list hide"}`}>
            <li><Link to="navbar" spy={true} smooth={true} offset={50} duration={500}>Domov</Link></li>
            <li><Link to="onas" spy={true} smooth={true} offset={50} duration={500}>O Nás</Link></li>
            <li><Link to="dermocentrum" spy={true} smooth={true} offset={50} duration={500}>Dermocentrum</Link></li>
            <li><Link to="zlavy" spy={true} smooth={true} offset={50} duration={500}>Zľavy</Link></li>
            <li><Link to="kontakt" spy={true} smooth={true} offset={50} duration={500}>Kontakt</Link></li>
        </ul>
    </div>
  )
}

export default NavBar