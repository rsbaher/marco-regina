import React from 'react';
import '../node_modules/reactjs-popup/dist/index.css';


export default function Addresses(props) {

  return (
    <>
      <h3 style={{ textAlign: 'center', }}>Adresses</h3>
      <br />
      <div className="title-container-two-columns"><h4 className="child-div">The Ceremony</h4>
        <div className="child-div"><a className="title-gold pointer-on-hover" rel="noreferrer"
          href={process.env.CEREMONY_ADDR.url}
          target="_blank">Directions</a></div>
      </div>

      <div className="color-gold bold">{process.env.CEREMONY_VENUE}</div>
      <div className="color-gold">{process.env.CEREMONY_ADDR.l1}</div>
      <div className="color-gold">{process.env.CEREMONY_ADDR.l2}</div>
      <div className="color-gold">{process.env.CEREMONY_ADDR.l3}</div>

      <br />
      <div className="title-container-two-columns"><h4 className="child-div">The Reception</h4>
        <div className="child-div" ><a className="title-gold pointer-on-hover" rel="noreferrer"
          href={process.env.RECEPTION_ADDR.url}
          target="_blank">Directions</a></div>
      </div>

      <div className="color-gold bold">{process.env.RECEPTION_VENUE}</div>
      <div className="color-gold">{process.env.RECEPTION_ADDR.l1}</div>
      <div className="color-gold">{process.env.RECEPTION_ADDR.l2}</div>
      <div className="color-gold">{process.env.RECEPTION_ADDR.l3}</div>
    </>
  )
}

