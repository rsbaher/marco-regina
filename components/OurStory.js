import styled from 'styled-components'
import Subtitle from '../components/subtitle'
import Button from '../components/button'
import Link from 'next/link'

const Story = styled.p`
  color: #6f6e77;
  font-family: tajawal, sans-serif;
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
`

const SideImg = styled.img`
  width: 95%;
`

export default function OurStory({ children }) {
  return (
    <>
    <Subtitle style={{marginBottom: '0px'}}>Our Engagement</Subtitle>
      <div className="container-img-two-columns" style={{maxWidth: '1300px'}}>
        <SideImgDiv className="img-column">
          <SideImg src="/img/engagement/FadedLaugh.JPG" />
          <FadeContainer></FadeContainer>
        </SideImgDiv>
        <section className="text-column">
          <Story>
          <br />
            <img src="/img/heart.svg" style={{ width: '1.5em' }} />
            <br />

            Between the undulating foothills and the soaring peaks of beautiful wildrose country,
            we came together to pledge and celebrate our love.
            Regretfully, we were unable to congregate in large numbers and celebrate our engagement
            all together due to the seemingly never ending pandemic.
            Blissfully however, we are ecstatic and overjoyed to share our big special day with you.
            <br />

            <img src="/img/heart.svg" style={{ width: '1.5em',paddingTop: '0.5em' }} />
            <br />
            <br />
            <div className="text-align-center">
            <Link href="/gallery" passHref>
              <Button type="button" className="button-gold color-light-gold">Gallery</Button>
            </Link>
            </div>
          </Story>
        </section>
      </div>
    </>
  )
}