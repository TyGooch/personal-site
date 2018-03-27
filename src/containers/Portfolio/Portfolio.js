import React from 'react'
import { withSiteData, Link } from 'react-static'

export default withSiteData(() => (
    <div className="home-container">
      <div className="home-text-container">
        <h1 style={{ textAlign: 'center' }}>DEVELOPER</h1>
        <span style={{fontWeight: 200, textAlign: 'center'}}>SANTA BARBARA, CA</span>
        <Link to="/portfolio" className="portfolio-link">VIEW PORTFOLIO</Link>
      </div>
    </div>
))
