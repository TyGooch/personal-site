import React from 'react'
import { withSiteData, Link } from 'react-static'

import './contact.css'


export default withSiteData(() => (
  <div className='contact-container'>
    <div className='contact-header' style={typeof window !== 'undefined' ? window.innerWidth < 950 ? {fontSize: '30px', paddingTop: '0px'} : null : null}>
      HOW TO REACH ME
    </div>
  </div>
))
