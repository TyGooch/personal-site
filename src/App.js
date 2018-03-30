import React from 'react'
import { Router, Route, Link, cleanPath } from 'react-static'
import { easeQuadOut, easeElasticIn, easeElasticOut, easeExpOut } from 'd3-ease'
import { NodeGroup } from 'react-move'
import { withContext, getContext } from 'recompose'
import PropTypes from 'prop-types'
import { hot } from 'react-hot-loader'
import styled, { injectGlobal } from 'styled-components'
import Particles from 'react-particles-js';

import Routes from 'react-static-routes'

import logoImage from './assets/personalLogoTrimmed.svg'
import './app.css'

// The magic :)
const AnimatedRoutes = getContext({
  // We have to preserve the router context for each route
  // otherwise, a component may rerender with the wrong data
  // during animation
  router: PropTypes.object,
  // We'll also look for the staticURL, so we can disable the animation during static render
  staticURL: PropTypes.string,
})(({ getComponentForPath, router, staticURL }) => (
  <Route
    path="*"
    render={props => {
      // Get the component for this path
      let Comp = getComponentForPath(cleanPath(props.location.pathname))
      if (!Comp) {
        Comp = getComponentForPath('404')
      }

      // When we're rendering for static HTML, be sure to NOT animate in.
      if (staticURL) {
        return (
          // This relative wrapper is necessary for accurate rehydration :)
          <div style={{ position: 'relative', height: 'inherit' }}>
            <Comp {...props} />
          </div>
        )
      }

      // Use React-Move to animate the different components coming in and out
      return (
        <NodeGroup
          // React-move will handle the entry and exit of any items we pass in `data`
          data={[
            {
              // pass the current Comp, props, ID and router
              id: props.location.pathname,
              Comp,
              props,
              router,
            },
          ]}
          keyAccessor={d => d.id}
          start={() => ({
            opacity: [0],
            scale: 1,
            translateY: ['100%'],
          })}
          enter={() => ({
            opacity: [1],
            translateY: ['0%'],
            timing: { duration: 750, delay: 750 },
          })}
          update={() => ({
            opacity: [1],
          })}
          leave={() => ({
            opacity: [0],
            translateY: ['100%'],
            timing: { duration: 750 },
          })}
        >
          {nodes => (
            <div style={{ position: 'relative', height:'100%' }}>
              {nodes.map(({ key, data, state: { opacity, translateY } }) => {
                // Here, we override the router context with the one that was
                // passed with each route
                const PreservedRouterContext = withContext(
                  {
                    router: PropTypes.object,
                  },
                  () => ({
                    router: data.router,
                  }),
                )(props => <div {...props} />)

                return (
                  <PreservedRouterContext
                    key={key}
                    style={{
                      position: 'absolute',
                      top: 0,
                      right: 0,
                      bottom: 0,
                      left: 0,
                      transform: `translateY(${translateY})`,
                      opacity,
                      height: '100%'
                    }}
                  >
                    <data.Comp {...data.props} />
                  </PreservedRouterContext>
                )
              })}
            </div>
          )}
        </NodeGroup>
      )
    }}
  />
))

const App = () => (
  <Router>
      <div className="app-container">
        <nav className="header">
          <Link to="/" exact className="header-link" activeClassName="header-link-active"><img src={logoImage} alt="" className="header-logo"/></Link>
          <div className="header-links">
            <Link to="/about" className = "header-link" activeClassName = "header-link-active"><span className='header-link-text'>ABOUT</span></Link>
            <Link to="/portfolio" className = "header-link" activeClassName = "header-link-active"><span className='header-link-text'>PORTFOLIO</span></Link>
            <Link to="/resume" className = "header-link" activeClassName = "header-link-active"><span className='header-link-text'>RESUME</span></Link>
            <Link to="/contact" className = "header-link" activeClassName = "header-link-active"><span className='header-link-text'>CONTACT</span></Link>
          </div>
        </nav>
        <Particles
          className="particles"
          style={
            {
              width: '100vmin',
              height: '100%',
              position: 'absolute',
              top: '0px',
              left: '0px',
              zIndex: -1
            }
          }
          params ={
            { "fps_limit": 60, "particles": { "number": { "value":60, "density": { "enable": false, "value_area": 5000 } }, "color": { "value": "#2c2d33" }, "shape": { "type":"circle" }, "opacity": { "value":0.66, "random":false, }, "size": { "value":2, "random":true }, "line_linked": { "enable": true, "distance": 224, "color": "#2c2d33", "opacity": 0.26, "width": 0.32 }, "move": { "enable":true, "speed":0.5, "direction":"none", "random":true, "straight":false, "out_mode":"out", "bounce":false, "attract": { "enable": false, "rotateX": 600, "rotateY": 1200 } } }, "interactivity": { "detect_on": "canvas", "events": { "onhover": { "enable": false, "mode": "repulse" }, "onclick": { "enable": false, "mode": "push" }, "resize":true }, "modes": { "grab": { "distance": 400, "line_linked": { "opacity": 1 } }, "bubble": { "distance": 400, "size": 40, "duration": 2, "opacity": 8, "speed": 3 }, "repulse": { "distance": 200, "duration": 0.66 }, "push": { "particles_nb": 4 }, "remove": { "particles_nb": 2 } } } , "retina_detect":true }
          }
          />
        <div className="content">
          <Routes component={AnimatedRoutes} />
        </div>
      </div>
  </Router>
)

export default hot(module)(App)
