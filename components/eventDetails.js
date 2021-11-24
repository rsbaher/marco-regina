import styled from 'styled-components'
import Subtitle from './subtitle'
import Card from './card'
import Link from 'next/link'
import Button from './button'
import CardTitle from './CardTitle'
import React from 'react';

const WeddingDetails = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
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
export default function EventDetails ({ children }) {
  const wedDate = new Date(process.env.WEDDING_DATE);

  return (
    <>
        <Subtitle style={{ paddingTop: '2em', marginBottom: '.2em', marginTop: '0em' }}>
          The Details
        </Subtitle>
        <WeddingDetails>
          <Card className="background-color-light-pink">
            <CardTitle style={{ textAlign: 'center', }}>Itenerary</CardTitle>
          </Card>
          <Card className="background-color-light-pink">
            <CardTitle style={{ textAlign: 'center', }}>Meal Options</CardTitle>
          </Card>
          <Card className="background-color-light-pink">
            <CardTitle style={{ textAlign: 'center', }}>Hotels</CardTitle>
          </Card>
        </WeddingDetails>
        <br />
        <div className="text-align-center">
          <Link href="/rsvp">
            <Button type="button" onClick="" className="button-gold color-light-gold">
              RSVP
            </Button>
          </Link>
        </div>
    </>
  )
}