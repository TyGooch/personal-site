import React, { Component } from 'react'
import { ServerStyleSheet } from 'styled-components'

export default {
  preact: true,
  // siteRoot: './',
  // stagingSiteRoot: './',
  getSiteData: () => ({
    title: 'Ty Gooch',
  }),
  getRoutes: () => {
    return [
      {
        path: '/',
        component: 'src/components/Home/Home',
      },
      {
        path: 'about',
        component: 'src/components/About/About',
      },
      {
        path: 'portfolio',
        component: 'src/components/Portfolio/Portfolio',
      },
      {
        path: 'resume',
        component: 'src/components/Resume/Resume',
      },
      {
        path: 'contact',
        component: 'src/components/Contact/Contact',
      },
      {
        is404: true,
        component: 'src/components/404/404',
      },
    ]
  },
  // renderToHtml: (render, Comp, meta) => {
  //   const sheet = new ServerStyleSheet()
  //   const html = render(sheet.collectStyles(<Comp />))
  //   meta.styleTags = sheet.getStyleElement()
  //   return html
  // },
  Document: class CustomHtml extends Component {
    componentDidMount(){
      {
        Particles.init({
          selector: '.background',
          color: ['#000000', '#000000'],
          connectParticles: true,
          responsive: [{
            breakpoint: 400,
            options: {
              color: '#00C9B1',
              maxParticles: 80,
              connectParticles: false
            }
          }]
        })
      }
    }
    render () {
      const {
        Html, Head, Body, children, renderMeta,
      } = this.props

      return (
        <Html>
          <Head>
           <title>Ty Gooch</title>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.9/css/all.css" integrity="sha384-5SOiIsAziJl6AWe0HWRKTXlfcSHKmYV4RBF18PPJ173Kzn7jzMyFuTtk8JA7QQG1" crossOrigin="anonymous"/>
            <link href="https://fonts.googleapis.com/css?family=Poppins:100,300,400,500,700,800,900|Roboto:100,300,400,500,700,900" rel="stylesheet" />
            {renderMeta.styleTags}
          </Head>
          <Body>{children}</Body>
          <canvas className="background"></canvas>
        </Html>
      )
    }
  },
}
