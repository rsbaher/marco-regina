import Subtitle from './subtitle'
import Link from 'next/link'
import CardTitle from './CardTitle'
import React from 'react';

export default function EventDetails ({ children }) {
  const wedDate = new Date(process.env.WEDDING_DATE);

  return (
    <>
        <h2 className="title">
          The Details
        </h2>
        <div className="container-two-columns">
          <div className="cards-div background-color-light-pink">
            <CardTitle style={{ textAlign: 'center', }}>Itenerary</CardTitle>
          </div>
          <div className="cards-div background-color-light-pink">
            <CardTitle style={{ textAlign: 'center', }}>Meal Options</CardTitle>
          </div>
          <div className="cards-div background-color-light-pink">
            <CardTitle style={{ textAlign: 'center', }}>Hotels</CardTitle>
          </div>
        </div>
        <br />
        <div className="text-align-center">
          <Link href="/rsvp" className="pointer-on-hover" passHref>
            <button type="button" onClick="" className="button-style button-gold color-light-gold">
              RSVP
            </button>
          </Link>
        </div>
    </>
  )
}