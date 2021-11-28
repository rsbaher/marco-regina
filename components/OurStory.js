import styled from 'styled-components'
import Subtitle from '../components/subtitle'
import Button from '../components/button'
import Link from 'next/link'
import Image from 'next/image'
import HeartSvg from '../public/img/heart.svg'
import SideImg from '../public/img/engagement/FadedLaugh.JPG'
const Story = styled.p`
  color: #6f6e77;
  font-family: 'El Messiri', sans-serif;
  font-size: 1.2em;
  line-height: 1.5em;
  margin: auto;
  max-width: 750px;
  padding: 0 2em;
  text-align: center;
  

  @media (max-width: 414px) {
    padding: 0 1em;
  }
`

const SideImgDiv = styled.div`
  width: 100%;
  position: relative;
  margin: auto;
`
const FadeContainer = styled.div`
  width: 95%;
	position: absolute;
	bottom: 0px;
	top: 0px;
	box-shadow: inset 0px 0px 10px 20px #fff3e6;
  padding-right: 5%;
`

export default function OurStory({ children }) {
  return (
    <>
      <Subtitle style={{ marginBottom: '0px' }}>Our Engagement</Subtitle>
      <div className="container-img-two-columns" style={{ maxWidth: '1300px' }}>
        <SideImgDiv className="img-column">
          <Image className="width95" src={SideImg} />
          <FadeContainer></FadeContainer>
        </SideImgDiv>
        <section className="text-column">
          <Story>
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
                <Button type="button" className="button-gold button-pink-hover color-light-gold">Gallery</Button>
              </Link>
            </div>
          </Story>
        </section>
      </div>
    </>
  )
}