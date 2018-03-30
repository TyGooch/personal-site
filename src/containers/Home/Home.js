import React from 'react'
import { Link, withSiteData } from 'react-static'
import Particles from 'react-particles-js';
import { Animate } from 'react-move'

import './home.css'

export default withSiteData(() => (
    <div className="home-container">


      <div className="home-text-container">
        <h1 style={{ textAlign: 'center' }}>DEVELOPER</h1>
        <span style={{fontWeight: 100, textAlign: 'center'}}>SANTA BARBARA, CA</span>
        <div className="portfolio-link">
          <Link to="/portfolio" className="portfolio-link-text">VIEW PORTFOLIO</Link>
        </div>
      </div>
    </div>
  )
)
