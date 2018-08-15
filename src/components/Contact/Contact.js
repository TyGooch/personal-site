import React from 'react'
import { withRouteData, Link } from 'react-static'

import './contact.css'


export default () => (
  <div className='contact-container'>
    <div className='contact-header' style={typeof window !== 'undefined' ? window.innerWidth < 950 ? {fontSize: '30px', paddingTop: '0px'} : null : null}>
      LET'S CONNECT
    </div>

    <div className='contact-content'>
      <form className='contact-form' action='https://formspree.io/gooch.ty@gmail.com' method='POST'>
        <div className='contact-form-input-container'>
          <input type='text' name='name' placeholder="Your Name"/>
        </div>

        <div className='contact-form-input-container'>
          <input type='email' name='_replyto' placeholder="Your Email"/>
        </div>

        <div className='contact-form-input-container'>
          <textarea className='message-input' name="message" rows="3" placeholder="Your Message"/>
        </div>

        <div className='contact-form-submit-container'>
          <button className='contact-form-submit' type='submit'><span className='contact-form-submit-text'>SEND</span></button>
        </div>
      </form>
    </div>
  </div>
)
