import CountdownSection from './Countdown'
import React from 'react';
import Image from 'next/image'
import RingsSvg from '../public/img/rings-colour.svg'
import ArchSvg from '../public/img/arch-tan.svg'

export default function DetailsSection ({ children }) {
  console.log("Wedding date: ", process.env.WEDDING_DATE)
  const wedDate = new Date(process.env.WEDDING_DATE);
  console.log("Wedding date: ", wedDate.toDateString())

  return (
    <>
        <h2 className="title-floral">
          Our Wedding
        </h2>
        
        <CountdownSection />
        <br />
        <div className="container-two-columns">

          <div style={{ textAlign: 'right' }} className=" cards-div background-color-light-pink">
            <h3>Holy Matrimony</h3>
            <div>{ wedDate.toDateString() }</div>
            <div className="font-taj-bold">{ process.env.WEDDING_TIME.ceremony }</div>
            <a className="title-gold pointer-on-hover"
              href={ process.env.CEREMONY_ADDR.url }
              target="_blank"
              rel="noreferrer"
            >
              { process.env.CEREMONY_VENUE }
            </a>
            <div className="card-icon left"><Image
              src={ArchSvg}
              width={125}
              height={125}
              alt="Cartoon icon of a tan wedding arch"
            /></div>
            <div className="color-gold">{ process.env.CEREMONY_ADDR.l1 }</div>
            <div className="color-gold">{ process.env.CEREMONY_ADDR.l2 }</div>
            <div className="color-gold">{ process.env.CEREMONY_ADDR.l3 }</div>
          </div>
          
          <div className="cards-div background-color-light-pink">
            <h3>Wedding Reception</h3>
            <div>{ wedDate.toDateString() }</div>
            <div className="font-taj-bold">{ process.env.WEDDING_TIME.cocktail }</div>
            <a className="title-gold pointer-on-hover" 
              href={ process.env.RECEPTION_ADDR.url }
              target="_blank"
              rel="noreferrer"
            >
              { process.env.RECEPTION_VENUE }
            </a>
            <div className="card-icon right"><Image
              src={RingsSvg}
              width={125}
              height={125}
              alt="Cartoon icon a diamond ring and gold wedeing band"
            /></div>
            <div className="color-gold">{ process.env.RECEPTION_ADDR.l1 }</div>
            <div className="color-gold">{ process.env.RECEPTION_ADDR.l2 }</div>
            <div className="color-gold">{ process.env.RECEPTION_ADDR.l3 }</div>
          </div>
        </div>
    </>
  )
}