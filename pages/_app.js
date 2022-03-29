import App from 'next/app'
import '../styles/globals.css'
import Head from 'next/head'
import React from 'react'
import { Context } from '../utilities/context'

const MyApp = ({Component, pageProps}) => {
  const [ context, setContext ] = React.useState(pageProps)

  return (
    <Context.Provider value={[context, setContext]}>
    <Head>
    <title>{ process.env.WEB_TITLE }</title>
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
      <Component {...pageProps} />
    </Context.Provider>
  )

} 

export default MyApp;