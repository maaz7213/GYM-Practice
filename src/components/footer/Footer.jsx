import React from 'react'
import './footer.css'
import Github from '../../assets/github.png'
import Instgram from '../../assets/instagram.png'
import Linkedin from '../../assets/linkedin.png'
import Logo from'../../assets/logo.png'
export default function Footer() {
  return (
    <div className='footer-container'>
      <hr />
      <div className="footer">
        <div className="social-links">
            <img src={Github} alt="" />
            <img src={Instgram} alt="" />
            <img src={Linkedin} alt="" />
        </div>
      <div className="logo-f">
        <img src={Logo} alt="" />
        </div>

      <div className="blur blurf-1"></div>
      <div className="blur blurf-2"></div>
      </div>
    </div>
  )
}
