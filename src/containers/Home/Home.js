import React from 'react'
import { Link } from 'react-static'
//
import mountainsImage from '../../assets/mountains3.png'
import background1 from '../../assets/background1.svg'
import background2 from '../../assets/background2.svg'
import footer from '../../assets/footer.svg'
import './home.css'

export default() => (
    <div className="home-container">
      <div className="home-text-container">
        <h1 style={{ textAlign: 'center' }}>DEVELOPER</h1>
        <span style={{fontWeight: 100, textAlign: 'center'}}>SANTA BARBARA, CA</span>
        <div className="portfolio-link">
          <Link to="/portfolio" className="portfolio-link-text">VIEW PORTFOLIO</Link>
        </div>
      </div>
      <img src={footer} className="footer" alt="" />
    </div>
)
