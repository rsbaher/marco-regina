import Floral from '../components/Floral'
import Layout from '../components/layout'
import Script from 'next/script'
import { getPhotos } from '../utilities/helper'

export default function Gallery() {

  return (
    <>
      <Script src="https://cdn.jsdelivr.net/npm/nanogallery2/dist/jquery.nanogallery2.min.js" strategy="beforeInteractive" />
      <Layout h1="Marco &amp; Regina" h2="Gallery">
        <section className="content1">
          <h2 className="title">Engagement Photos</h2>
          <br />
          <br />
        </section>
        <section className="content2">
          <Floral />
          <h2 className="title">Wedding Photos</h2>
          <br />
          <br />
        </section>
      </Layout>
    </>
  )
}

export async function getServerSideProps(context) {
  let photos = await getPhotos()
  return {
    props: {
      photos: photos
    }, // will be passed to the page component as props
  }
}