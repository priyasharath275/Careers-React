import React from 'react'
import aura from '../assets/images/aura-logo.jpg'
import './index.scss'

const Header = () =>{
return(
    <>
<div className='header_main'>
    <h1>Aura</h1>
<img className='header_main_img'  src ={aura} alt='Logo'></img>
</div>
</>
);
}

export default Header
