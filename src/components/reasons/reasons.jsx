import React from 'react'
import'./reason.css'
import  nike from '../../assets/nike.png'
import tick from '../../assets/tick.png'
import image1 from '../../assets/image1.png'
import image2 from '../../assets/image2.png'
import image3 from '../../assets/image3.png'
import image4 from '../../assets/image4.png'
import nb from '../../assets/nb.png'
import adidas from '../../assets/adidas.png'

export default function reasons() {
  return (
    <div className="Reasons" id='reasons'>
        <div className="left-r">
            <img src={image1} alt="" />
            <img src={image2} alt="" />
            <img src={image3} alt="" />
            <img src={image4} alt="" />
        </div>
        <div className="right-r">
            <span>Some Reasons</span>
            <div>
                <span className='stroke-text'>why</span>
                <span> choose us?</span>
            </div>
          <div className='details-r'>
            <div>
              <img src={tick} alt=""></img>
              <span>OVER 140+ EXPERTS COACHES</span>
              </div>
            <div>
              <img src={tick} alt=""></img>
              <span>TRAIN SMATER AND FASTER THAN BEFORE</span>
            </div>
            <div>
              <img src={tick} alt=""></img>
              <span>1 FREE PROGRAM FOR NEW MEMBER</span>
             </div>
            <div>
              <img src={tick} alt=""></img>
              <span>RELIABLE</span>
              </div>
            </div>
            <span style={{color:"var(--gray)", fontWeight:"normal",}}>
              OUR PARTNERS
            </span>
            <div className="patners">
              <img src={nb} alt="" />
              <img src={nike} alt="" />
              <img src={adidas} alt="" />
              </div>
        </div>
    </div>
  )
}

