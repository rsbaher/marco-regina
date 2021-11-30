import React from 'react';
import Popup from 'reactjs-popup';
import '../node_modules/reactjs-popup/dist/index.css';
import CardTitle from './CardTitle'
import Link from 'next/link'

export default function Modal(props) {
    let phoneURL = "tel:" + props.hotel.phone
    let  amenities = props.hotel.amenities
    return (
        <>
            <Popup trigger={<button type="button" className="button-style button-gold color-light-pink pointer-on-hover">More Details</button>}
                position="center center" className="modal" modal>
                <div className="modal-body">
                    <CardTitle className="text-align-center">{props.title}</CardTitle>
                    <div className="title-container-two-columns text-align-center">
                        <p>Phone: <a className="title-gold pointer-on-hover" href={phoneURL}>{props.hotel.phone}</a></p>
                        <p><a className="title-gold pointer-on-hover" href={props.hotel.url}>Visit Website</a></p>
                    </div>
                    <div className="title-gold text-align-center" style={{fontSize: '1.3em'}}>Ammenities</div>
                    <ul className="two-columns">
                        {amenities.map((item, i) => (
                            <li key={i}>{item}</li>
                        ))}
                    </ul>

                    <p className="text-align-center">Approx. price for Sept. 4 to 5 without group discount: <span className="title-gold">{props.hotel.price}</span></p>

                </div>
            </Popup>
        </>
    )
}

