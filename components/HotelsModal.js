import React from 'react';
import Popup from 'reactjs-popup';
import '../node_modules/reactjs-popup/dist/index.css';


export default function Modal(props) {
    let phoneURL = "tel:" + props.hotel.phone
    let  amenities = props.hotel.amenities
    return (
        <>
            <Popup trigger={<button type="button" className="button-style button-gold color-light-pink pointer-on-hover">More Details</button>}
                position="center center" className="modal" modal>
                <div className="modal-body">
                    <h3 className="text-align-center">{props.title}</h3>
                    <div className="title-container-two-columns-modal text-align-center padding-top-1 padding-bottom-1">
                        <span style={{paddingRight: '25%'}}>Phone: <a className="title-gold pointer-on-hover" href={phoneURL}>{props.hotel.phone}</a></span>
                        <span><a className="title-gold pointer-on-hover" href={props.hotel.url}>Visit Website</a></span>
                    </div>
                    <div className="title-gold text-align-center" style={{fontSize: '1.3em'}}>Ammenities</div>
                    <ul className="two-columns">
                        {amenities.map((item, i) => (
                            <li key={i}>{item}</li>
                        ))}
                    </ul>

                    <p className="text-align-center">Approx. price for Sept. 4 to 5 without group discount: <span className="title-gold">{props.hotel.price}</span></p>
                    <p className="text-align-center">{props.hotel.note}</p>

                </div>
            </Popup>
        </>
    )
}

