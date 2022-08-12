import React, { useRef } from 'react'
import './join.css'
import emailjs from '@emailjs/browser'
export default function Join() {
    const from = useRef()
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_wwxdunv', 'template_i98ebci', from.current, 'IG0WVfa2F5I_MTqY3')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };

  return (
    <div className="Join" id="join-us">
        <div className="left-j">
            <hr/>
            <div>
                <span className='stroke-text'>READY TO</span>
                <span>LEVEL UP</span>
            </div>
            <div>
                <span>YOUR BODY</span>
                <span className='stroke-text'>WITH US?</span>
            </div>
        </div>
        <div className="right-j">
            <form ref={from} className='email-container' onSubmit={sendEmail}>
                <input type='email' name='user_email'  placeholder='Enter your Email address'/>
                <button className="btn btn-join">Join Now</button>
            </form>
        </div>
    </div>
  )
}

