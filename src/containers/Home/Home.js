import React from 'react'
import { Link } from 'react-static'
import Particles from 'react-particles-js';

import mountainsImage from '../../assets/mountains3.png'
import background1 from '../../assets/background1.svg'
import background2 from '../../assets/background2.svg'
import footer from '../../assets/footer2.svg'

import './home.css'

export default() => (
    <div className="home-container">
      <Particles style={
          {
            width: '100%',
            height: '100%',
            position: 'absolute',
            top: '0px',
            left: '0px',
            zIndex: -1
          }
        }
        params ={
          { "fps_limit": 30, "particles": { "number": { "value":80, "density": { "enable": false, "value_area": 561 } }, "color": { "value": "#2c2d33" }, "shape": { "type":"circle" }, "opacity": { "value":0.66, "random":false, }, "size": { "value":2, "random":true }, "line_linked": { "enable": true, "distance": 224, "color": "#2c2d33", "opacity": 0.26, "width": 0.32 }, "move": { "enable":true, "speed":2, "direction":"none", "random":true, "straight":false, "out_mode":"out", "bounce":false, "attract": { "enable": false, "rotateX": 600, "rotateY": 1200 } } }, "interactivity": { "detect_on": "window", "events": { "onhover": { "enable": false, "mode": "repulse" }, "onclick": { "enable": false, "mode": "push" }, "resize":true }, "modes": { "grab": { "distance": 400, "line_linked": { "opacity": 1 } }, "bubble": { "distance": 400, "size": 40, "duration": 2, "opacity": 8, "speed": 3 }, "repulse": { "distance": 200, "duration": 0.66 }, "push": { "particles_nb": 4 }, "remove": { "particles_nb": 2 } } } , "retina_detect":true }


      }/>

      <div className="home-text-container">
        <h1 style={{ textAlign: 'center' }}>DEVELOPER</h1>
        <span style={{fontWeight: 100, textAlign: 'center'}}>SANTA BARBARA, CA</span>
        <div className="portfolio-link">
          <Link to="/portfolio" className="portfolio-link-text">VIEW PORTFOLIO</Link>
        </div>
      </div>
      {//<img src={footer} className="footer" alt="" />
      }
    </div>
)
