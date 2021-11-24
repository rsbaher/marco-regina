import styled from 'styled-components'
import Subtitle from './subtitle'
import CountdownSection from './Countdown'
import Card from '../components/card'
import Link from 'next/link'
import Button from './button'
import CardTitle from './CardTitle'
import React from 'react';

export default function DetailsSection ({ children }) {
  const wedDate = new Date(process.env.WEDDING_DATE);

  return (
    <>
        <Subtitle style={{ paddingTop: '2em', marginBottom: '.2em', marginTop: '0em' }}>
          Our Wedding
        </Subtitle>
        
        <CountdownSection />
        <br />
        <div className="container-two-columns">
          <Card style={{ textAlign: 'right' }} className="background-color-light-pink">
            <CardTitle>Holy Matrimony</CardTitle>
            <div>{ wedDate.toDateString() }</div>
            <div className="font-taj-bold">{ process.env.WEDDING_TIME.ceremony }</div>
            <a className="title-gold"
              href={ process.env.CEREMONY_ADDR.url }
              target="_blank"
              rel="noreferrer"
            >
              { process.env.CEREMONY_VENUE }
            </a>
            <img className="card-icon"
              src="/img/arch-tan.svg"
              style={{ left: '0.3em' }}
            />
            <div className="color-gold">{ process.env.CEREMONY_ADDR.l1 }</div>
            <div className="color-gold">{ process.env.CEREMONY_ADDR.l2 }</div>
            <div className="color-gold">{ process.env.CEREMONY_ADDR.l3 }</div>
          </Card>
          
          <Card className="background-color-light-pink">
            <CardTitle>Wedding Reception</CardTitle>
            <div>{ wedDate.toDateString() }</div>
            <div className="font-taj-bold">{ process.env.WEDDING_TIME.cocktail }</div>
            <a className="title-gold"
              href={ process.env.RECEPTION_ADDR.url }
              target="_blank"
              rel="noreferrer"
            >
              { process.env.RECEPTION_VENUE }
            </a>
            <img className="card-icon"
              src="/img/rings-colour.svg"
              style={{ right: '-0.3em' }}
            />
            <div className="color-gold">{ process.env.RECEPTION_ADDR.l1 }</div>
            <div className="color-gold">{ process.env.RECEPTION_ADDR.l2 }</div>
            <div className="color-gold">{ process.env.RECEPTION_ADDR.l3 }</div>
          </Card>
        </div>
    </>
  )
}