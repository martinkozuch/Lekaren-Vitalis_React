import React from 'react'
import './billboard.css'
import {Link} from 'react-scroll'

const Billboard = () => {
  return (
    <div className='bill-container' >
      <div className='bill-background'>
        <div className='bill-info'> 
          <h1>Vitajte v lekárni a dermocentre Vitalis</h1>
          <p>Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel.</p>
          <h2><Link to="onas" spy={true} smooth={true} offset={50} duration={500}>Prečítajte si o nás</Link></h2>
        </div>
      </div>
    </div>
  )
}

export default Billboard