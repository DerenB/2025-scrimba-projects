import React from 'react';

import '../styles/Entry.css';

import Marker from '../src/assets/marker.png';

function Entry(props) {
    return (
        <>
            <article className='journalEntry'>

                <div className='mainImageContainer'>
                    <img className='mainImage' src={props.image.src} alt={props.image.alt} />
                </div>

                <div className='infoContainer'>

                    <div className='infoHeader'>
                        <img className='marker' src={Marker} alt="map marker" />

                        <span className="country">{props.city}</span>

                        <a target='_blank' href={props.mapUrl} className='mapLink'>
                            View on Google Maps
                        </a>
                    </div>

                    <h2 className="entryTitle">{props.title}</h2>

                    <p className='tripDates'>{props.dates}</p>

                    <p className="entryText">{props.text}</p>

                </div>

            </article>

            <div className='breakLine'></div>
        </>
        
    )
}

export default Entry;
