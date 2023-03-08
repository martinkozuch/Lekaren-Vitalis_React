import React from 'react'
import './dermocentrum.css'
import dermo1 from '../img/20230210_164614.jpg'
import {AiOutlineStar} from 'react-icons/ai'

const Dermocentrum = () => {
  return (
    <div className='dermo-container' id='dermocentrum'>
        <div className='dermo-header'>
            <h1>DERMOCENTRUM</h1>
            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas. Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem.</p>
        </div>
        <div className='dermo-box'>
            <div className='dermo-left'>
                
            <div className='dermo-oneitem'>
            <h2><AiOutlineStar /></h2>
                <div className='dermo-itemtext'>
                <h3>Harum esse qui</h3>
                <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
                </div>
            </div>
            <div className='dermo-oneitem'>
            <h2><AiOutlineStar /></h2>
                <div className='dermo-itemtext'>
                <h3>Aut occaecati</h3>
                <p>Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere</p>
                </div>
            </div>
            <div className='dermo-oneitem'>
            <h2><AiOutlineStar /></h2>
                <div className='dermo-itemtext'>
                <h3>Beatae veritatis</h3>
                <p>Expedita veritatis consequuntur nihil tempore laudantium vitae denat pacta</p>
                </div>
            </div>
            </div>
            <img src={dermo1} alt=''></img>
        </div>

    </div>
  )
}

export default Dermocentrum