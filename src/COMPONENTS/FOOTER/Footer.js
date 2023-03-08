import React from 'react'
import './footer.css'
const Footer = () => {
  return (
    <div className='footer-container' id='kontakt'>
        <div className='footer-box'>
        <div className='foot-one'>
        <h3>Adresa</h3>
            <p>Lekáreň Vitalis</p>
            <p>Trhová 7435/4, 917 01 Trnava</p>
            <p></p>
        </div>

        <div className='foot-one'>
        <h3>Otváracie hodiny</h3>
            <p>Pondelok - Piatok ---  9:00 - 17:00</p>
            <p>Sobota - Nedeľa --- Zatvorené</p>
        </div>

      <div className='foot-one'>
        <h3>Kontakt</h3>
            <p>Tel: 033/ 593 60 43</p>
            <p>Email: vitalis@mail.t-com.sk</p>
        </div>
      </div>
    </div>
  )
}

export default Footer