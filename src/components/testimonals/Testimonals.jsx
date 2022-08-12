import React, { useState } from 'react'
import'./testimonals.css'
import {testimonialsData } from '../../data/testimonialsData'
import LeftArrow from '../../assets/leftArrow.png'
import RightArrow from '../../assets/rightArrow.png'
import {motion} from 'framer-motion'
export default function Testimonals() {
    const transition = {type:'spring', duration:3}
    const [selected, setSelected] = useState(0);
    const tlength = testimonialsData.length;
    return (
    <div className='testimonals' id='testimonals'>
      <div className="left-t">
        <span>Testimonals</span>
        <span className='stroke-text'> what they</span>
        <span>say about us</span>
        <motion.span
         key={selected}
         initial={{opacity:0,x:-100}}
         animate={{opacity:1,x:0}}
         exit={{opacity:0,x:100}}
         transition={transition}
        >
            {testimonialsData[selected].review}
        </motion.span>

        <span style={{color: 'var(--orange)'}}>
            <span>
            {testimonialsData[selected].name}
            </span>
            - {testimonialsData[selected].status}
        </span>
      </div>
      <div className="right-t">
        <motion.div 
        initial={{opacity:0,x:100}}
        transition={{...transition,duration:2}}
        whileInView={{opacity:1,x:0}}
        ></motion.div>
        <motion.div
        initial={{opacity:0,x:100}}
        transition={{...transition,duration:2}}
        whileInView={{opacity:1,x:0}}
        ></motion.div>
        <motion.img 
        key={selected}
        initial={{opacity:0,x:100}}
        animate={{opacity:1,x:0}}
        exit={{opacity:0,x:-100}}
        transition={transition}
        src={testimonialsData[selected].image} alt="" />
        <div className='arrows'>
          <img
          onClick={()=>(selected===0
            ?setSelected(tlength-1)
            :setSelected((prev)=>prev-1))}
           src={LeftArrow} 
           alt="" />
          <img 
         onClick={()=>( selected === tlength-1
          ?setSelected(0)
          :setSelected((prev) => prev+1 ))}
         src={RightArrow} alt="" />
        </div>
      </div>
    </div>
  )
}
