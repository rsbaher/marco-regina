import Link from 'next/link'
import Image from 'next/image'
import HeartSvg from '../public/img/heart.svg'
import SideImg from '../public/img/engagement/FadedLaugh.JPG'


export default function OurStory({ children }) {
  return (
    <>
      <h2 className="title" >Our Engagement</h2>
      <div className="container-img-two-columns" style={{ maxWidth: '1300px' }}>
        <div className="side-img img-column">
          <Image className="width95" src={SideImg} />
          <div className="faded-side-img"></div>
        </div>
        <section className="text-column">
          <p className="story">
            <br />
            <Image src={HeartSvg} width={26} height={26} alt="Cartoon icon of a grey heart"/>
            <br />

            Between the undulating foothills and the soaring peaks of beautiful wildrose country,
            we came together to pledge and celebrate our love.
            Regretfully, we were unable to congregate in large numbers and celebrate our engagement
            all together due to the seemingly never ending pandemic.
            Blissfully however, we are ecstatic and overjoyed to share our big special day with you.
            <br />
            <Image src={HeartSvg} width={26} height={26} alt="Cartoon icon of a grey heart"/>
            <br />
            <br />
            <div className="text-align-center">
              <Link href="/gallery" className="pointer-on-hover" passHref>
                <button type="button" className="button-style button-gold button-pink-hover color-light-gold">Gallery</button>
              </Link>
            </div>
          </p>
        </section>
      </div>
    </>
  )
}