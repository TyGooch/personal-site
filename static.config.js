import React, { Component } from 'react'
import { ServerStyleSheet } from 'styled-components'

export default {
  siteRoot: 'https://tygooch.com',
  stagingSiteRoot: './',
  getSiteData: () => ({
    title: 'Ty Gooch',
    metaDescription: "Ty Gooch\'s Personal Website And Portfolio"
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
        component: 'src/components/Home/Home',
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
            <link rel="shortcut icon" href="/favicon.ico" />
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.9/css/all.css" integrity="sha384-5SOiIsAziJl6AWe0HWRKTXlfcSHKmYV4RBF18PPJ173Kzn7jzMyFuTtk8JA7QQG1" crossOrigin="anonymous"/>
            <link href="https://fonts.googleapis.com/css?family=Poppins:100,300,400,500,700,800,900|Roboto:100,300,400,500,700,900" rel="stylesheet" />
            {renderMeta.styleTags}
          </Head>
          <Body>{children}</Body>
        </Html>
      )
    }
  },
}
