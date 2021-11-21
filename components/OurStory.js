import styles from './homepage.style'
import styled from 'styled-components'
import Subtitle from '../components/subtitle'
import Button from '../components/button'
import Link from 'next/link'
//import "../public/style.css";

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

const DivContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
`

const DivContainer2 = styled.div`
  width: 100%;
  display: flex;
  align-items:center;
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
  margin-left: 10%;
  margin-top: 10%;
	box-shadow: inset 0px 0px 10px 20px #fff3e6;
`

const SideImg = styled.img`
  width: 95%;
  margin-left: 10%;
  margin-top: 10%;
`

export default function OurStory({ children }) {
  return (
    <>
      <DivContainer2>
        <SideImgDiv style={{ width: '95%' }}>
          <SideImg src="/img/engagement/FadedLaugh.JPG" />
          <FadeContainer></FadeContainer>
        </SideImgDiv>
        <section style={{ width: '95%' }}>

          <Subtitle >Our Engagement</Subtitle>

          <Story>
            <img src="/img/heart.svg" style={{ width: '1.5em' }} />
            <br />
            <br />
            Between the undulating foothills and the soaring peaks of beautiful wildrose country,
            we came together to pledge and celebrate our love.
            Regretfully, we were unable to congregate in large numbers and celebrate our engagement
            all together due to the seemingly never ending pandemic.
            Blissfully however, we are ecstatic and overjoyed to share our big special day with you.
            <br />
            <br />
            <img src="/img/heart.svg" style={{ width: '1.5em' }} />
            <br />
            <br />
            <Link href="/gallery">
              <Button type="button" className="button-gold color-light-gold">Gallery</Button>
            </Link>
          </Story>
        </section>
      </DivContainer2>
    </>
  )
}