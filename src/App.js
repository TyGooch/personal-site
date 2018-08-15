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

const AnimatedRoutes = getContext({
  router: PropTypes.object,
  staticURL: PropTypes.string,
})(({ getComponentForPath, router, staticURL }) => (
  <Route
    path="*"
    render={props => {
      let Comp = getComponentForPath(cleanPath(props.location.pathname))
      if (!Comp) {
        Comp = getComponentForPath('404')
      }

      if (staticURL) {
        return (
          <div style={{ position: 'relative', height: '100%', width:'inherit' }}>
            <Comp {...props} />
          </div>
        )
      }

      return (
        <NodeGroup
          // React-move will handle the entry and exit of any items we pass in `data`
          data={[
            {
              id: props.location.pathname,
              Comp,
              props,
              router,
            },
          ]}
          keyAccessor={d => d.id}
          start={(data) => ({
            opacity: [0],
          })}
          enter={() => ({
            opacity: [1],
            timing: { duration: 1000, delay: 500 }
          })}
          update={() => ({
            opacity: [1],
          })}
          leave={(data) => ({
            opacity: [0],
            timing: { duration: 325 },
          })}
        >
          {nodes => (
            <div style={{ position: 'relative', height:'inherit', width:'100%' }}>
              {nodes.map(({ key, data, state: { opacity, translateY } }) => {
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
                      opacity
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

    // this.setState({isMobile: window.innerWidth <= 700 ? true : false})
  }

  isMobile(){
    if(typeof window !== 'undefined')
      return (window.innerWidth <= 700)
  }

  handleResize(){
    if(typeof window !== 'undefined')
      this.setState({isMobile: window.innerWidth <= 700 ? true : false})
  }

  // getPathIndex(path) {
  //   if(path === '/home')
  //     return 0
  //   if(path === '/about')
  //     return 1
  //   if(path === '/portfolio')
  //     return 2
  //   if(path === '/resume')
  //     return 3
  //   if(path === '/contact')
  //     return 4
  // }

  render(){
    return(
      <div>
      <Router type='browser'>
        <div className="app-container">
          <div className="content" >
            <nav className="header" style={this.isMobile() ? {paddingBottom: '25px'} : null}>
              <Link to={{pathname: "/"}} exact activeClassName="header-logo-active" className="header-logo"><img src={logoImage} alt="" /></Link>
                <nav className={`header-links${this.isMobile() ? ' mobile' : ''}`}  >
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
            <Routes component={AnimatedRoutes} />
          </div>

          <div className="scroll-fade-bottom"></div>

        </div>
      </Router>
      <Particles
        className="particles"
        canvasClassName="particles-canvas"
        width='100vw'
        height='100vh'
        style={
          {
            width: '100vw',
            height: ((typeof window !== 'undefined') && (window.innerWidth <= 700)) ? 'calc(100vh - 87px)' : 'calc(100vh - 87.5px)',
            position: 'fixed',
            top: ((typeof window !== 'undefined') && (window.innerWidth <= 700)) ? '87px' : '87.5px',
            bottom: 0,
            left: '0px',
            zIndex: -1,
            opacity: 1,
          }
        }
        params ={
          { "fps_limit": 60, "particles": { "number": { "value": (typeof window !== 'undefined') ? ((window.innerWidth/400)*30) : 60, "density": { "enable": false, "value_area": 400 } }, "color": { "value": "#000000" }, "shape": { "type":"circle" }, "opacity": { "value":0.1, "random":false, }, "size": { "value":0.1, "random":false }, "line_linked": { "enable": true, "distance": 224, "color": "#000000", "opacity": 0.5, "width": 0.32 }, "move": { "enable":true, "speed":0.75, "direction":"none", "random":true, "straight":false, "out_mode":"bounce", "bounce":true, "attract": { "enable": false, "rotateX": -100, "rotateY": -100 } } }, "interactivity": { "detect_on": "canvas", "events": { "onhover": { "enable": false, "mode": "repulse" }, "onclick": { "enable": false, "mode": "push" }, "resize":false }, "modes": { "grab": { "distance": 400, "line_linked": { "opacity": 1 } }, "bubble": { "distance": 400, "size": 40, "duration": 2, "opacity": 8, "speed": 3 }, "repulse": { "distance": 200, "duration": 0.66 }, "push": { "particles_nb": 4 }, "remove": { "particles_nb": 2 } } } , "retina_detect":true }
        }
        />
    </div>
    )
  }
}

export default hot(module)(App)
