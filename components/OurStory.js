import Link from 'next/link'
import Image from 'next/image'
import SideImg from '../public/img/sideImg.jpeg'


export default function OurStory({ children }) {
  return (
    <>
      <h2 className="title" >Our Engagement</h2>
      <div className="container-img-two-columns" style={{ maxWidth: '1300px' }}>
        <div className="side-img img-column">
          <Image className="width95" src={SideImg} alt=""/>
          <div className="faded-side-img"></div>
        </div>
        <section className="text-column">
          <p className="story">
            <br />
            <br />
            Between the undulating foothills and the soaring peaks of beautiful wildrose country,
            we came together to pledge and celebrate our love.
            Regretfully, we were unable to congregate in large numbers and celebrate our engagement
            all together due to the seemingly never ending pandemic.
            Blissfully however, we are ecstatic and overjoyed to share our big special day with you.
            <br />
            <br />
            <br />
            <span className="text-align-center">
              <Link href="#" className="pointer-on-hover" passHref>
                <button type="button" className="button-style button-gold button-light-gold-hover color-light-gold">Gallery Coming Soon</button>
              </Link>
            </span>
          </p>
        </section>
      </div>
    </>
  )
}