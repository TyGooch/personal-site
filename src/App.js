import React from 'react'
import { Router, Route, Link, cleanPath, Prefetch } from 'react-static'
import { easeQuadOut, easeElasticIn, easeElasticOut, easeExpOut } from 'd3-ease'
import { NodeGroup, Animate } from 'react-move'
import { withContext, getContext } from 'recompose'
import PropTypes from 'prop-types'
import { hot } from 'react-hot-loader'
import styled, { injectGlobal } from 'styled-components'
import Particles from 'react-particles-js'
import Routes from 'react-static-routes'
import {Collapse} from 'react-collapse';

// import logoImage from './assets/personalLogoNew.svg'
import logoImage from './assets/logo2.svg'
import './app.css'
import './bootstrap.min.css'

// const particles = Particles.init({
//   selector: 'canvas',
//   color: ['#000000', '#000000'],
//   connectParticles: true,
//   responsive: [{
//     breakpoint: 400,
//     options: {
//       color: '#00C9B1',
//       maxParticles: 80,
//       connectParticles: true
//     }
//   }]
// }).bind(window, document)

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
          <div style={{ position: 'relative', height: '100%', width:'inherit' }}>
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
            timing: { duration: 325, delay: 325 },
          })}
          update={() => ({
            opacity: [1],
          })}
          leave={() => ({
            opacity: [0],
            translateY: ['100%'],
            timing: { duration: 325 },
          })}
        >
          {nodes => (
            <div style={{ position: 'relative', height:'100%', width:'100%' }}>
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
                      height: '100%',
                      width: '100%'
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

class App extends React.Component{
  constructor(){
    super()
    this.state={
      menuOpened: window.innerWidth > 700 ? true : false,
      isMobile: window.innerWidth <= 700 ? true : false
    }
  }

  componentDidMount() {
    window.addEventListener("resize", this.handleResize.bind(this))
  }

  handleResize(){
    this.setState({menuOpened: window.innerWidth > 700 ? true : false, isMobile: window.innerWidth <= 700 ? true : false})
  }

  render(){
    return(
      <Router>
          <div className="app-container">
            <nav className="header">
              <Link to="/" exact activeClassName="header-logo-active" className="header-logo"><img src={logoImage} alt="" /></Link>
              <nav className={`header-links ${this.state.isMobile ? 'mobile' : null}`} >
                  <Prefetch path='/about'><Link to="/about" className = "header-link"  activeStyle={{width: 'auto', height: 'inherit'}} style={{marginRight: this.state.isMobile ? '0px' : '0px'}}><span className='header-link-text'>ABOUT</span></Link></Prefetch>
                  <Prefetch path='/portfolio'><Link to="/portfolio" className = "header-link" activeStyle={{width: 'auto', height: 'inherit'}} style={{marginRight: this.state.isMobile ? '0px' : '0px'}}><span className='header-link-text'>PORTFOLIO</span></Link></Prefetch>
                  <Prefetch path='/resume'><Link to="/resume" className = "header-link" activeStyle={{width: 'auto', height: 'inherit'}} style={{marginRight: this.state.isMobile ? '0px' : '0px'}}><span className='header-link-text'>RESUME</span></Link></Prefetch>
                  <Prefetch path='/contact'><Link to="/contact" className = "header-link" activeStyle={{width: 'auto', height: 'inherit'}} style={{marginRight: this.state.isMobile ? '0px' : '0px'}}><span className='header-link-text'>CONTACT</span></Link></Prefetch>
              </nav>
              <div>
                <nav className="social-links">
                  <div onClick={() => window.open('https://github.com/tygooch', '_blank')} className='social-link'><i className='fab fa-github'></i></div>
                  <div onClick={() => window.open('https://linkedin.com/in/tygooch', '_blank')} className='social-link'><i className='fab fa-linkedin-in'></i></div>
                  <div onClick={() => window.open('https://facebook.com/tybradleygooch', '_blank')} className='social-link'><i className='fab fa-facebook-f'></i></div>
                </nav>
              </div>
            </nav>
            <Particles
              className="particles"
              canvasClassName="particles-canvas"
              width='100vw'
              height='100vh'
              style={
                {
                  width: '100vw',
                  height: '100vh',
                  position: 'fixed',
                  top: '0px',
                  left: '0px',
                  zIndex: -1,
                  opacity: 1
                }
              }
              params ={
                { "fps_limit": 60, "particles": { "number": { "value":((window.innerWidth/400)*30), "density": { "enable": false, "value_area": 400 } }, "color": { "value": "#000000" }, "shape": { "type":"circle" }, "opacity": { "value":0.5, "random":false, }, "size": { "value":1, "random":false }, "line_linked": { "enable": true, "distance": 224, "color": "#000000", "opacity": 0.5, "width": 0.32 }, "move": { "enable":true, "speed":0.75, "direction":"none", "random":true, "straight":false, "out_mode":"bounce", "bounce":true, "attract": { "enable": false, "rotateX": -100, "rotateY": -100 } } }, "interactivity": { "detect_on": "canvas", "events": { "onhover": { "enable": false, "mode": "repulse" }, "onclick": { "enable": false, "mode": "push" }, "resize":false }, "modes": { "grab": { "distance": 400, "line_linked": { "opacity": 1 } }, "bubble": { "distance": 400, "size": 40, "duration": 2, "opacity": 8, "speed": 3 }, "repulse": { "distance": 200, "duration": 0.66 }, "push": { "particles_nb": 4 }, "remove": { "particles_nb": 2 } } } , "retina_detect":true }
              }
              />
            <div className="content" style={this.state.isMobile ? {height: 'calc(100% - 100px)', top: '100px'} : null}>
              <Routes component={AnimatedRoutes} />
            </div>
          </div>
      </Router>
    )
  }
}

export default hot(module)(App)
