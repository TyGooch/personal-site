import React from 'react'
import { Router, Route, Link, cleanPath } from 'react-static'
import { easeQuadOut } from 'd3-ease'
import { NodeGroup } from 'react-move'
import { withContext, getContext } from 'recompose'
import PropTypes from 'prop-types'
import { hot } from 'react-hot-loader'
import styled, { injectGlobal } from 'styled-components'

import Routes from 'react-static-routes'

import logoImage from './assets/personalLogoTrimmed.svg'
import './app.css'
// import './containers/Home/home.css'
// import './containers/Resume/resume.css'

// injectGlobal`
//   body {
//     font-family: 'Poppins', sans-serif;
//     font-weight: 300;
//     font-size: 16px;
//     margin: 0px;
//     padding: 0px;
//     color: black;
//     height: 100vh;
//     width: 100vw;
//   }
//
//   h1 {
//     padding: 0px;
//     margin: 0px;
//   }
//
//   a {
//     text-decoration: none;
//     color: black;
//   }
//
//   img {
//     max-width: 100%;
//   }
// `
//
// const AppStyles = styled.div`
//   .app-container {
//     height: 100vh;
//     width: 100%;
//   }
//
//   .header {
//     width: 100%;
//     height: 50px;
//     padding: 0px;
//     margin: 0px;
//     display: flex;
//     flex-direction: row;
//     justify-content: space-between;
//     /* position: relative; */
//     /* top: 0px; */
//   }
//
//   .header-logo {
//     height: 45px;
//     max-width: 25vw;
//     margin-top: 6px;
//     padding-left: 10px;
//   }
//
//   .header-links {
//     display: flex;
//     flex-direction: row;
//     justify-content: center;
//     max-width: 55vw;
//     padding-right: 15px;
//   }
//
//   .header-link {
//     position: relative;
//     font-weight: 400;
//     font-size: 14px;
//     line-height: 75px;
//     color: black;
//     margin-left: 0.5em;
//     margin-right: 0.5em;
//     padding-bottom: 0px;
//   }
//
//   .header-link-text {
//   }
//
//   .header-selected {
//     color: red;
//   }
//
//   .content {
//     padding: 0px;
//     margin: 0px;
//     margin-top: 25px;
//     height: calc(100% - 75px);
//     min-width: 400px;
//     width: 100vw;
//     overflow: scroll;
//   }
// `

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
            translateY: [10],
          })}
          enter={() => ({
            opacity: [1],
            translateY: [0],
            timing: { duration: 200, delay: 200, ease: easeQuadOut },
          })}
          update={() => ({
            opacity: [1],
          })}
          leave={() => ({
            opacity: [0],
            translateY: [-10],
            timing: { duration: 200, ease: easeQuadOut },
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
                      transform: `translateY(${translateY}px)`,
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
          <Link to="/"><img src={logoImage} alt="" className="header-logo"/></Link>
          <div className="header-links">
            <Link to="/about" className = "header-link" activeStyle={{borderBottom: "4px solid #cf000f"}}><span className='header-link-text'>ABOUT</span></Link>
            <Link to="/portfolio" className = "header-link" activeStyle={{borderBottom: "4px solid #cf000f"}}><span className='header-link-text'>PORTFOLIO</span></Link>
            <Link to="/resume" className = "header-link" activeStyle={{borderBottom: "4px solid #cf000f"}}><span className='header-link-text'>RESUME</span></Link>
            <Link to="/contact" className = "header-link" activeStyle={{borderBottom: "4px solid #cf000f"}}><span className='header-link-text'>CONTACT</span></Link>
          </div>
        </nav>
        <div className="content">
          <Routes component={AnimatedRoutes} />
        </div>
      </div>
  </Router>
)

export default hot(module)(App)
