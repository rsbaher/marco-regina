import App from 'next/app'
import '../styles/globals.css'
import Layout from '../components/layout'
import Head from 'next/head'


class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <>
      <Head>
      <title>{ process.env.WEB_TITLE }</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      </>
    )
  }
}

export default MyApp
