import React from 'react'
import './contactbonus.css'
import {Link} from 'react-scroll'

const ContactBonus = () => {
  return (
    <div className='contact-container'>
      <h2>In an emergency? Need help now?</h2>
      <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <h5><Link to="dermocentrum" spy={true} smooth={true} offset={50} duration={500}>Dermocentrum</Link> </h5>
    </div>
  )
}

export default ContactBonus