import OurStory from '../components/OurStory'
import DetailsSection from '../components/DetailsSection'
import Floral from '../components/Floral'
import Link from 'next/link'

export default function Home() {

  return (
    <div >
      <section className="content1">
        <OurStory />
      </section>
      <section className="content2">
        <Floral />
        <DetailsSection />
        <br />
        <div className="text-align-center">
          <Link href="/details" className="pointer-on-hover" passHref>
            <button type="button" onClick="" className="button-style button-gold color-light-pink">
              Event Details
            </button>
          </Link>
        </div>
        <br />
        <div className="text-align-center">
        <Link href="/rsvp" className="pointer-on-hover" passHref>
            <button type="button" onClick="" className="button-style button-gold color-light-pink">
              RSVP
            </button>
          </Link>
        </div>
      </section>
    </div>
  )
}
