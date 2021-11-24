import Subtitle from '../components/subtitle'
import Floral from '../components/GalleryFloral'

export default function Gallery() {
  
  return (
    <>
      <section className="content1">
        <Subtitle>Engagement Photos</Subtitle>
        <br/>
        <br/>
      </section>
      <section className="content2">
      <Floral />
      <Subtitle>Wedding Photos</Subtitle>
      <br/>
      <br/>
      </section>
      </>
  )
}