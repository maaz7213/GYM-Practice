import React, { useState } from 'react'
import './Header.css'
import Logo from '../../assets/logo.png'
import Bars from '../../assets/bars.png'
import {Link} from 'react-scroll';
export default function Header() {
  
  const mobile = window.innerWidth <= 768 ? true:false;
  const [menuOpened , setMenuOpened]= useState (false)

  return (
    <div className='header'  id='header'>
        <img
         src={Logo} alt="" className='logo'  />
        {(menuOpened === false && mobile === true)? (<div style={{backgroundcolor:'var(--appcolor)', padding:'0.5rem',borderRadius:'5px'}} 
        onClick={()=> setMenuOpened(true)}
        >
          <img src={Bars} alt="" style={{width : '1.5rem', height:'1.5rem'}} />
        </div>):(<ul className='header-menu'>
            <li onClick={()=> setMenuOpened(false)}> <Link
             onClick={()=> setMenuOpened(false)}
             to='header'
             activeClass='active'
             spy={true}
             smooth={true}
             >Home</Link></li>
            <li></li>
            <li><Link  
            onClick={()=> setMenuOpened(false)}
            to='programs'
            spy={true}
            smooth={true}
            > program</Link></li>
            <li><Link
             onClick={()=> setMenuOpened(false)}
             to='why-us'
             spy={true}
             smooth={true}
             > why us</Link></li>
            <li><Link
             onClick={()=> setMenuOpened(false)}
             to='testimonals'
             spy={true}
             smooth={true}
             > Plans </Link></li>
            <li > <Link 
            onClick={()=> setMenuOpened(false)}
            to='testimonials'
            span={true}
            smooth={true}
            >Testimonals</Link></li>
        </ul>
)}
    </div>
  )
}
