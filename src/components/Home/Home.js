import React from 'react'
import { Link, withRouteData } from 'react-static'

import './home.css'

export default () => (
  <div className="home-container">
    <div className="home-text-container">
      <h1 style={{ textAlign: 'center', padding: '0px', margin: '0px'}}>DEVELOPER</h1>
      <span className="home-text-container-location">SANTA BARBARA, CA</span>
      <div className="home-links">
        <div className="home-link" style={typeof window !== 'undefined' ? (window.innerWidth < 700 ? {fontWeight: '400'} : null) : null}>
          <Link to="/about" className="home-link-text" style={{backgroundColor: 'black', color: 'white'}}>LEARN MORE</Link>
        </div>
        <div className="home-link" style={typeof window !== 'undefined' ? (window.innerWidth < 700 ? {fontWeight: '400'} : null) : null}>
          <Link to="/portfolio" className="home-link-text" style={{backgroundColor: '#cf000f'}}>VIEW PORTFOLIO</Link>
        </div>
      </div>
    </div>
  </div>
)
