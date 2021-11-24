import styled from 'styled-components'
import Subtitle from './subtitle'
import Card from './card'
import Link from 'next/link'
import Button from './button'
import CardTitle from './CardTitle'
import React from 'react';

export default function EventDetails ({ children }) {
  const wedDate = new Date(process.env.WEDDING_DATE);

  return (
    <>
        <Subtitle style={{ paddingTop: '2em', marginBottom: '.2em', marginTop: '0em' }}>
          The Details
        </Subtitle>
        <div className="container-two-columns">
          <Card className="background-color-light-pink">
            <CardTitle style={{ textAlign: 'center', }}>Itenerary</CardTitle>
          </Card>
          <Card className="background-color-light-pink">
            <CardTitle style={{ textAlign: 'center', }}>Meal Options</CardTitle>
          </Card>
          <Card className="background-color-light-pink">
            <CardTitle style={{ textAlign: 'center', }}>Hotels</CardTitle>
          </Card>
        </div>
        <br />
        <div className="text-align-center">
          <Link href="/rsvp" passHref>
            <Button type="button" onClick="" className="button-gold color-light-gold">
              RSVP
            </Button>
          </Link>
        </div>
    </>
  )
}