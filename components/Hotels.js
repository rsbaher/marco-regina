import React from 'react';
import Modal from './HotelsModal'
import '../node_modules/reactjs-popup/dist/index.css';


export default function Hotels(props) {
    const hotels = process.env.HOTELS
    console.log("hotels", hotels)
    return (
        <div className="container-two-columns" style={{ maxWidth: '900px', }}>
          {hotels.map((hotel, index) => (
            <div className="cards-div background-color-light-pink" key={index}>
              <h3 className="text-align-center" key={index}>{hotel.name}</h3>
              <div className="title-container-two-columns top-padding-sm" key={index}>
                <div className="text-align-right">
                  <div>{hotel.addr.l1}</div>
                  <div>{hotel.addr.l2}&nbsp;{hotel.addr.l3}</div>
                  <div></div></div>
                <div className="text-align-left"><a className="title-gold pointer-on-hover" rel="noreferrer" href={hotel.addr.url}
                  target="_blank">Directions</a></div>
              </div>
              <div className="text-align-center top-padding-sm" key={index}>
                <Modal title="Hotel Details" hotel={hotel} /></div>
            </div>
          )
          )}
        </div>
    )
}

