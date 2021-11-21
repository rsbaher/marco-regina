import styled from 'styled-components'
import Subtitle from './subtitle'
import CountdownSection from './Countdown'
import Card from '../components/card'
import Link from 'next/link'
import Button from './button'
import CardTitle from './CardTitle'

const WeddingDetails = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  grid-gap: 1em;
  margin: auto;
  max-width: 700px;
  padding: 1em;

  @media (max-width: 414px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  }
`

const CardIcon = styled.img`
  position: absolute;
  width: 7em;
  z-index: -1;

  @media (max-width: 375px) {
    width: 6em;
  }

  @media (max-width: 320px) {
    width: 5em;
  }
`

const WeddingVenue = styled.a`
  color: #cba135;
  font-weight: bold;
  text-decoration-color: #cba135;
  z-index: 2;
`

const WeddingAddress = styled.div`
  color: #cba135;
`
export default function DetailsSection ({ children }) {
  const DateFormat = "dddd, MMMM Do YYYY";
  return (
    <>
        <Subtitle style={{ paddingTop: '2em', marginBottom: '.2em', marginTop: '0em' }}>
          Our Wedding
        </Subtitle>
        
        <CountdownSection />
        <br />
        <WeddingDetails>
          <Card venue="sg" style={{ textAlign: 'right', backgroundColor: '#ffe6e6' }}>
            <CardTitle>Holy Matrimony</CardTitle>
            <div>{ DateFormat }</div>
            <div className="weddingTime">{ process.env.WEDDING_TIME.ceremony }</div>
            <WeddingVenue
              href={ process.env.CEREMONY_ADDR.url }
              target="_blank"
            >
              { process.env.CEREMONY_VENUE }
            </WeddingVenue>
            <CardIcon
              src="/img/arch-tan.svg"
              style={{ left: '0.3em' }}
            />
            <WeddingAddress>{ process.env.CEREMONY_ADDR.l1 }</WeddingAddress>
            <WeddingAddress>{ process.env.CEREMONY_ADDR.l2 }</WeddingAddress>
            <WeddingAddress>{ process.env.CEREMONY_ADDR.l3 }</WeddingAddress>
          </Card>
          <Card venue="jkt" style={{ backgroundColor: '#ffe6e6' }}>
            <CardTitle>Wedding Reception</CardTitle>
            <div>{ DateFormat }</div>
            <div className="weddingTime">{ process.env.WEDDING_TIME.cocktail }</div>
            <WeddingVenue
              href={ process.env.RECEPTION_ADDR.url }
              target="_blank"
            >
              { process.env.RECEPTION_VENUE }
            </WeddingVenue>
            <CardIcon
              src="/img/rings-colour.svg"
              style={{ right: '-0.3em' }}
            />
            <WeddingAddress>{ process.env.RECEPTION_ADDR.l1 }</WeddingAddress>
            <WeddingAddress>{ process.env.RECEPTION_ADDR.l2 }</WeddingAddress>
            <WeddingAddress>{ process.env.RECEPTION_ADDR.l3 }</WeddingAddress>
          </Card>
        </WeddingDetails>
        <br />
        <div className="rsvpButtonContainer">
          <Link href="/rsvp">
            <Button type="button" onClick="" className="button-gold color-light-pink">
              RSVP
            </Button>
          </Link>
        </div>
    </>
  )
}