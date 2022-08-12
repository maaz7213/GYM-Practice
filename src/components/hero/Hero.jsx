import React from 'react'
import './Hero.css'
import Header from '../header/Header';
import hero_image from '../../assets/hero_image.png'
import hero_image_back from '../../assets/hero_image_back.png'
import Heart from '../../assets/heart.png'
import Calories from "../../assets/calories.png"
import {motion} from 'framer-motion'
import NumberCounter from 'number-counter'

export default function Hero() {
  const transition = {type:'spring', duration:3}
  const mobile = window.innerWidth<=768? true:false;
  return (
    <div className='hero' id='home'>
      <div className="blur blur-h"></div>
      <div className='left-h'>  
        <Header/>
        {/* the best ad*/}
        <div className="the-best-ad">
          <motion.div
          initial={{left: mobile ? "178px" : "238px" }}
          whileInView={{left:'8px'}}
          transition={{...transition, type:'tween'}}
          >
          </motion.div>
          <span> THE BEST FITNESS CLUB THE TOWN </span>
        </div>
        {/* hero heading*/}
        <div className="hero-text">
       <div>
        <span className='stroke-text'> shape</span>
        <span>your</span>
        </div>  
        <div><span>
          ideal body
          </span></div>
        </div>
        <div><span>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus cum neque cupiditate reprehenderit    
          </span></div>
          {/*figures*/}
          <div className='figures'>
            <div>
              <span>
                <NumberCounter end={140} start={100} delay="4" prefix="+"/>
              </span>
              <span>expert coaches</span>
            </div>
            <div>
              <span>
                <NumberCounter end={978} start={500} delay="4" prefix="+"/>
                </span>
              <span>members joined</span>
            </div>
            <div>
              <span>
                <NumberCounter end={50} start={1} delay="2" prefix="+"/>
                </span>
              <span>fitness program</span>
              </div>
          </div>
          {/*hero buttons*/}
          <div className="hero-buttons">
            <button className="btn">Get Started</button>
            <button className="btn">Leran More</button>
          </div>
      </div>
      <div className='right-h'>
      <button className='btn'>Join Now</button>
      
      <motion.div 
      initial={{right:'-1rem'}}
      whileInView={{right:'4rem'}}
      transition={transition}
      className="heart-rate">
        <img src={Heart} alt="" />
        <span>Heart Rate</span>
        <span>116 bpm</span>
      </motion.div>
      {/*hero -images*/}
      <img src={hero_image} alt=""  className='hero-image'/>
      <motion.img
      initial={{right:'11rem'}} 
      whileInView={{right:'20rem'}}
      transition={transition}
      src={hero_image_back} alt=""  className='hero-image-back'/>
      {/* calories */}
      <motion.div 
      initial={{right:'37rem'}}
      whileInView={{right:'28rem'}}
      transition={transition}
      className="calories">
        <img src={Calories} alt="" />
        <div>
        <span>Calories Burned</span>
        <span>220 kcal</span>
        </div>
      </motion.div>
      </div>
    </div>
  )
}
