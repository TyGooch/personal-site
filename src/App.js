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
import {browser} from 'react-static'

// import logoImage from './assets/personalLogoNew.svg'
import logoImage from './assets/logo2.svg'
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
          <div style={{ position: 'relative', height: '100%', width:'inherit' }}>
            <Comp {...props} />
          </div>
        )
      }
      // console.log('path');
      // console.log(props.location.pathname);
      // let pathIndex
      // if(props.location.pathname === '/home')
      //   pathIndex = 0
      // if(props.location.pathname === '/about')
      //   pathIndex = 1
      // if(props.location.pathname === '/portfolio')
      //   pathIndex = 2
      // if(props.location.pathname === '/resume')
      //   pathIndex = 3
      // if(props.location.pathname === '/contact')
      //   pathIndex = 4
      //
      // console.log(pathIndex);
      // console.log('prevpath');
      //
      // console.log(props.location.state.prevPath);
      // let prevPathIndex
      // if(props.location.state.prevPath === '/home')
      //   prevPathIndex = 0
      // if(props.location.state.prevPath === '/about')
      //   prevPathIndex = 1
      // if(props.location.state.prevPath === '/portfolio')
      //   prevPathIndex = 2
      // if(props.location.state.prevPath === '/resume')
      //   prevPathIndex = 3
      // if(props.location.state.prevPath === '/contact')
      //   prevPathIndex = 4
      //
      // console.log(prevPathIndex);
      // console.log('===========');

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
          start={(data) => ({
            // opacity: [0],
            translateY: [`100vh`],
          })}
          enter={() => ({
            opacity: [1],
            translateY: ['0px'],
            timing: { duration: 325, delay: 325 }
          })}
          update={() => ({
            opacity: [1],
            // translateY: ['100%']
          })}
          leave={(data) => ({
            // opacity: [0],
            translateY: [`-100vh`],
            timing: { duration: 325 },
          })}
        >
          {nodes => (
            <div style={{ position: 'relative', height:'inherit', width:'100%' }}>
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
                      position: 'relative',
                      top: 0,
                      right: 0,
                      bottom: 0,
                      left: 0,
                      transform: `translateY(${translateY})`,
                      opacity,
                      // height: '100%',
                      // width: '100%',
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
      isMobile: (typeof window !== 'undefined') ? (window.innerWidth <= 700 ? true : false) : false
    }
  }

  componentDidMount() {
    if(typeof window !== 'undefined')
      window.addEventListener("resize", this.handleResize.bind(this))

    this.handleResize()
  }

  isMobile(){
    if(typeof window !== 'undefined')
      return (window.innerWidth <= 700)
  }

  handleResize(){
    if(typeof window !== 'undefined')
      this.setState({isMobile: window.innerWidth <= 700 ? true : false})
  }

  getPathIndex(path) {
    if(path === '/home')
      return 0
    if(path === '/about')
      return 1
    if(path === '/portfolio')
      return 2
    if(path === '/resume')
      return 3
    if(path === '/contact')
      return 4
  }

  render(){
    return(
      <Router type='browser'>
        <div className="app-container">
          <nav className="header">
            <Link to={{pathname: "/"}} exact activeClassName="header-logo-active" className="header-logo"><img src={logoImage} alt="" /></Link>
            <nav className={`header-links`} style={ this.isMobile() ? {top: '64.5px', width: 'calc(100vw - 30px)', maxWidth: '600px', alignSelf: 'center', minWidth: '300px', paddingBottom: '6px', paddingLeft: '15px', paddingRight: '15px'} : null} >
              <Link key={0} to={{pathname: "/about"}} className = "header-link"  activeStyle={{width: 'auto', height: 'inherit'}} style={{marginRight: this.isMobile() ? '0px' : '0px'}}><span className='header-link-text'>ABOUT</span></Link>
              <Prefetch path='/portfolio'><Link to={{pathname: "/portfolio"}} className = "header-link" activeStyle={{width: 'auto', height: 'inherit'}} style={{marginRight: this.isMobile() ? '0px' : '0px'}}><span className='header-link-text'>PORTFOLIO</span></Link></Prefetch>
              <Link to={{pathname: "/resume"}} className = "header-link" activeStyle={{width: 'auto', height: 'inherit'}} style={{marginRight: this.isMobile() ? '0px' : '0px'}}><span className='header-link-text'>RESUME</span></Link>
              <Link to={{pathname: "/contact"}} className = "header-link" activeStyle={{width: 'auto', height: 'inherit'}} style={{marginRight: this.isMobile() ? '0px' : '0px'}}><span className='header-link-text'>CONTACT</span></Link>
            </nav>
            <div>
              <nav className="social-links">
                <a href='https://github.com/tygooch' className='social-link'><i className='fab fa-github'></i></a>
                <a href='https://linkedin.com/in/tygooch' className='social-link'><i className='fab fa-linkedin-in'></i></a>
                <a href='https://facebook.com/tybradleygooch' className='social-link'><i className='fab fa-facebook-f'></i></a>
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
                height: this.isMobile() ? 'calc(100% - 87px)' : 'calc(100% - 66px)',
                position: 'fixed',
                top: this.isMobile() ? '87px' : '66px',
                left: '0px',
                zIndex: -1,
                opacity: 1
              }
            }
            params ={
              { "fps_limit": 60, "particles": { "number": { "value": (typeof window !== 'undefined') ? ((window.innerWidth/400)*30) : 60, "density": { "enable": false, "value_area": 400 } }, "color": { "value": "#000000" }, "shape": { "type":"circle" }, "opacity": { "value":0.5, "random":false, }, "size": { "value":1, "random":false }, "line_linked": { "enable": true, "distance": 224, "color": "#000000", "opacity": 0.5, "width": 0.32 }, "move": { "enable":true, "speed":0.75, "direction":"none", "random":true, "straight":false, "out_mode":"bounce", "bounce":true, "attract": { "enable": false, "rotateX": -100, "rotateY": -100 } } }, "interactivity": { "detect_on": "canvas", "events": { "onhover": { "enable": false, "mode": "repulse" }, "onclick": { "enable": false, "mode": "push" }, "resize":false }, "modes": { "grab": { "distance": 400, "line_linked": { "opacity": 1 } }, "bubble": { "distance": 400, "size": 40, "duration": 2, "opacity": 8, "speed": 3 }, "repulse": { "distance": 200, "duration": 0.66 }, "push": { "particles_nb": 4 }, "remove": { "particles_nb": 2 } } } , "retina_detect":true }
            }
            />

          <div className="content" style={this.isMobile() ? {top: '86px'} : null}>
            <Routes component={AnimatedRoutes} />
          </div>

          <div className="scroll-fade-bottom"></div>

        </div>
      </Router>
    )
  }
}

export default hot(module)(App)
