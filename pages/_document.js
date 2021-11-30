import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
            <meta name="description" content="Marco and Regina's Wedding Website." />
            <link rel="icon" href="/favicon.ico" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
            <link href="https://fonts.googleapis.com/css2?family=El+Messiri:wght@400;500;600;700&family=Great+Vibes&family=Sansita+Swashed:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet"/>
            <link rel="preconnect" as="font" href="/public/fonts/GreatVibes-Regular.ttf"/>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument