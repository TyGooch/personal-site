import React from 'react'
import { withSiteData, Link } from 'react-static'
import ucsbMapImage from '../../assets/ucsbMapImage.svg'
import ucsbMapMacImage from '../../assets/ucsbMapMacImage.png'
import ucsbMapIphoneImage from '../../assets/ucsbMapIphoneImage.png'
import ivEmergencyDispatchImage from '../../assets/ivEmergencyDispatchImage.png'

import './portfolio.css'

export default withSiteData(() => (
  <div className='portfolio-container'>
    <div className='portfolio-header' style={typeof window !== 'undefined' ? window.innerWidth < 950 ? {fontSize: '30px', paddingTop: '0px'} : null : null}>
      <span style={{color: '#cf000f'}}>- </span>FEATURED PROJECTS<span style={{color: '#cf000f'}}> -</span>
    </div>

    <div style={typeof window !== 'undefined' ? window.innerWidth < 950 ? {width: '100%', textAlign: 'center'} : null : null}>
      <img id='iv-emergency-dispatch-image' src={ucsbMapMacImage} style={typeof window !== 'undefined' ? window.innerWidth < 950 ? {width: '350px', textAlign: 'center'} : {width:'600px'} : null} />
    </div>
    <div style={typeof window !== 'undefined' ? window.innerWidth < 950 ? {width: '100%', textAlign: 'center'} : null : null}>
      <img id='iv-emergency-dispatch-image' src={ucsbMapIphoneImage} style={typeof window !== 'undefined' ? window.innerWidth < 950 ? {width: '350px', textAlign: 'center'} : null : null} />
    </div>
    <div style={typeof window !== 'undefined' ? window.innerWidth < 950 ? {width: '100%', textAlign: 'center'} : null : null}>
      <img id='iv-emergency-dispatch-image' src={ivEmergencyDispatchImage} style={typeof window !== 'undefined' ? window.innerWidth < 950 ? {width: '350px', textAlign: 'center'} : {width:'600px'} : null} />
    </div>

  </div>
))
