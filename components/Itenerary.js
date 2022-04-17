import React from 'react';
import '../node_modules/reactjs-popup/dist/index.css';


export default function Itenerary(props) {

  return (
    <>
      <h3 style={{ textAlign: 'center', }}>Itenerary</h3>
      <br />
      <h4>The Ceremony</h4>
      <p className="color-gold"><span className="bold">Start Time:</span> {process.env.WEDDING_TIME.ceremony}</p>
      <br />
      <h4>The Reception</h4>
      <p className="margin-bottom-half color-gold"><span className="bold">Cocktail Hour:</span> {process.env.WEDDING_TIME.cocktail}</p>
      <p className="margin-top-0 color-gold"><span className="bold">Dinner Start:</span> {process.env.WEDDING_TIME.dinner}</p>
    </>
  )
}

