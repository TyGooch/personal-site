import React from 'react'
import { withRouteData, Link } from 'react-static'
import ucsbMapImage from '../../assets/ucsbMapImage.svg'
import ucsbMapMacImage from '../../assets/ucsbMapMacImage.png'
import ucsbMapIphoneImage from '../../assets/ucsbMapIphoneImage.png'
import ivEmergencyDispatchImage from '../../assets/ivEmergencyDispatchImage.png'

import './portfolio.css'

export default () => (
  <div className='portfolio-container'>
    <div className='portfolio-header' style={typeof window !== 'undefined' ? window.innerWidth < 950 ? {fontSize: '30px', paddingTop: '0px'} : null : null}>
      WHAT I MAKE
    </div>

    <div style={typeof window !== 'undefined' ? window.innerWidth < 950 ? {width: '100%', textAlign: 'center'} : {float: 'right'} : null}>
      <img id='portfolio-image' src={ucsbMapMacImage} style={typeof window !== 'undefined' ? window.innerWidth < 950 ? {width: '350px', textAlign: 'center'} : {width:'600px'} : null} />
    </div>
    <div style={typeof window !== 'undefined' ? window.innerWidth < 950 ? {width: '100%', textAlign: 'center'} : null : null}>
      <img id='portfolio-image' src={ucsbMapIphoneImage} style={typeof window !== 'undefined' ? window.innerWidth < 950 ? {width: '350px', textAlign: 'center'} : null : null} />
    </div>
    <div style={typeof window !== 'undefined' ? window.innerWidth < 950 ? {width: '100%', textAlign: 'center'} : null : null}>
      <img id='portfolio-image' src={ivEmergencyDispatchImage} style={typeof window !== 'undefined' ? window.innerWidth < 950 ? {width: '350px', textAlign: 'center'} : {width:'600px'} : null} />
    </div>

  </div>
)
